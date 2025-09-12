import { useState, useEffect, useCallback } from "react";
import incentiveConfig from "./incentive-config.json";

interface IncentiveMessage {
  id: string;
  text: string;
  priority: number;
  contexts: string[];
  enabled: boolean;
}

interface IncentiveState {
  isVisible: boolean;
  currentMessage: IncentiveMessage | null;
  displayCount: number;
  lastInteraction: number;
}

export const useIncentiveMessages = (isWidgetOpen: boolean, currentContext: string = "homepage") => {
  const [state, setState] = useState<IncentiveState>({
    isVisible: false,
    currentMessage: null,
    displayCount: 0,
    lastInteraction: Date.now(),
  });

  // Filtrar mensajes habilitados y relevantes al contexto
  const getAvailableMessages = useCallback((): IncentiveMessage[] => {
    if (!incentiveConfig.enabled) return [];

    return incentiveConfig.messages
      .filter((msg) => msg.enabled && msg.contexts.includes(currentContext))
      .sort((a, b) => a.priority - b.priority);
  }, [currentContext]);

  // Seleccionar mensaje siguiente
  const getNextMessage = useCallback((): IncentiveMessage | null => {
    const availableMessages = getAvailableMessages();
    if (availableMessages.length === 0) return null;

    // Rotar entre mensajes disponibles
    const messageIndex = state.displayCount % availableMessages.length;
    return availableMessages[messageIndex];
  }, [getAvailableMessages, state.displayCount]);

  // Verificar si debe mostrar incentivo
  const shouldShowIncentive = useCallback((): boolean => {
    const now = Date.now();
    const config = incentiveConfig.config;

    // Verificaciones básicas
    if (!incentiveConfig.enabled) return false;
    if (isWidgetOpen && incentiveConfig.settings.pauseOnChatOpen) return false;
    if (state.isVisible) return false;
    if (state.displayCount >= config.maxDisplaysPerSession) return false;

    // Verificar tiempo desde última interacción
    if (now - state.lastInteraction < config.pauseAfterInteraction) return false;

    // Verificar delay inicial después de cargar página (solo para el primer mensaje)
    if (state.displayCount === 0 && now - state.lastInteraction < config.delayAfterPageLoad) {
      return false;
    }

    return true;
  }, [isWidgetOpen, state.isVisible, state.displayCount, state.lastInteraction]);

  // Mostrar incentivo
  const showIncentive = useCallback(() => {
    const shouldShow = shouldShowIncentive();
    const nextMessage = getNextMessage();

    // Debug logs (solo en desarrollo)
    if (process.env.NODE_ENV === "development") {
      console.log("🎯 Incentive Check:", {
        shouldShow,
        hasMessage: !!nextMessage,
        currentContext,
        displayCount: state.displayCount,
        isVisible: state.isVisible,
        isWidgetOpen: isWidgetOpen,
      });
    }

    if (!shouldShow) return;
    if (!nextMessage) return;

    setState((prev) => ({
      ...prev,
      isVisible: true,
      currentMessage: nextMessage,
      displayCount: prev.displayCount + 1,
    }));

    // Auto-ocultar después del tiempo configurado
    setTimeout(() => {
      setState((prev) => ({
        ...prev,
        isVisible: false,
      }));
    }, incentiveConfig.config.displayDuration);
  }, [shouldShowIncentive, getNextMessage, currentContext, state.displayCount, state.isVisible, isWidgetOpen]);

  // Ocultar incentivo manualmente
  const hideIncentive = useCallback(() => {
    setState((prev) => ({
      ...prev,
      isVisible: false,
      lastInteraction: Date.now(),
    }));
  }, []);

  // Marcar interacción del usuario
  const markInteraction = useCallback(() => {
    setState((prev) => ({
      ...prev,
      lastInteraction: Date.now(),
    }));
  }, []);

  // Reset session (útil para testing o nueva sesión)
  const resetSession = useCallback(() => {
    setState({
      isVisible: false,
      currentMessage: null,
      displayCount: 0,
      lastInteraction: Date.now(),
    });
  }, []);

  // Effect para interval principal
  useEffect(() => {
    if (!incentiveConfig.enabled) return;

    const interval = setInterval(() => {
      showIncentive();
    }, incentiveConfig.config.displayInterval);

    return () => clearInterval(interval);
  }, [showIncentive]);

  // Effect para manejar apertura/cierre del widget
  useEffect(() => {
    if (isWidgetOpen) {
      markInteraction();
      if (state.isVisible && incentiveConfig.settings.pauseOnChatOpen) {
        hideIncentive();
      }
    }
  }, [isWidgetOpen, markInteraction, hideIncentive, state.isVisible]);

  return {
    // Estado
    isVisible: state.isVisible,
    currentMessage: state.currentMessage,
    displayCount: state.displayCount,

    // Acciones
    hideIncentive,
    markInteraction,
    resetSession,

    // Configuración
    config: incentiveConfig,
    availableMessages: getAvailableMessages(),
  };
};

export default useIncentiveMessages;
