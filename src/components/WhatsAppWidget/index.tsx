import React, { useState, useEffect } from "react";
import {
  WhatsAppContainer,
  WhatsAppButton,
  ChatBoxExtended,
  Header,
  MessageBubble,
  SendButton,
  NotificationBadge,
  PulseAnimation,
} from "./styles";
import { WhatsAppWidgetProps } from "./types";
import IncentiveMessage from "./IncentiveMessage";
import useIncentiveMessages from "./useIncentiveMessages";

const CustomWhatsAppWidget: React.FC<WhatsAppWidgetProps> = ({
  phoneNumber,
  companyName = "Solyven Seguridad",
  message = "¡Hola! 👋 ¿Necesitás un presupuesto personalizado?",
  replyTimeText = "Respuesta inmediata",
  context = "homepage",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNotification, setShowNotification] = useState(true);
  const [userMessage, setUserMessage] = useState("");

  // Hook personalizado para manejar incentivos
  const {
    isVisible: showIncentive,
    currentMessage: currentIncentiveMessage,
    hideIncentive,
    markInteraction,
    config,
  } = useIncentiveMessages(isOpen, context);

  // Animación de pulso cada 10 segundos para llamar la atención
  useEffect(() => {
    if (!config.enabled) return;

    const interval = setInterval(() => {
      if (!isOpen) {
        setShowNotification(true);
        setTimeout(() => setShowNotification(false), 3000);
      }
    }, 10000);

    return () => clearInterval(interval);
  }, [isOpen, config.enabled]);

  const handleSendMessage = () => {
    if (!phoneNumber) {
      alert("Número de teléfono no configurado");
      return;
    }
    const finalMessage = userMessage || message;
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(finalMessage)}`);
    setUserMessage("");
    setIsOpen(false);
    markInteraction(); // Marcar interacción exitosa
  };

  const getCurrentTime = () => {
    return new Date().toLocaleTimeString("es-AR", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <WhatsAppContainer>
      {/* Mensaje de incentivo */}
      {showIncentive && !isOpen && currentIncentiveMessage && (
        <IncentiveMessage
          onClose={() => {
            hideIncentive();
            markInteraction();
          }}
          message={currentIncentiveMessage.text}
        />
      )}
      {/* Botón principal con animaciones */}
      <WhatsAppButton
        onClick={() => {
          setIsOpen(!isOpen);
          markInteraction();
        }}
        isOpen={isOpen}
        showNotification={showNotification}>
        {/* Badge de notificación - solo con incentivos */}
        {showIncentive && !isOpen && (
          <NotificationBadge>
            <span>1</span>
          </NotificationBadge>
        )}

        {/* Animación de pulso - solo con incentivos */}
        {showIncentive && !isOpen && <PulseAnimation />}

        {/* Ícono de WhatsApp */}
        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.891 3.486" />
        </svg>
      </WhatsAppButton>

      {/* Chat Box */}
      {isOpen && (
        <ChatBoxExtended>
          {/* Header */}
          <Header>
            <div className="avatar">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.891 3.486" />
              </svg>
            </div>
            <div className="info">
              <h4>{companyName}</h4>
              <span>{replyTimeText}</span>
            </div>
            <button className="close" onClick={() => setIsOpen(false)}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
              </svg>
            </button>
          </Header>

          {/* Message Bubble */}
          <div className="messages">
            <MessageBubble>
              <p>{message}</p>
              <span className="time">{getCurrentTime()}</span>
            </MessageBubble>
          </div>

          {/* Send Section */}
          <div className="send-section">
            <input
              type="text"
              placeholder="Escribí tu consulta..."
              value={userMessage}
              onChange={(e) => setUserMessage(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
            />
            <SendButton onClick={handleSendMessage}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
              </svg>
            </SendButton>
          </div>
        </ChatBoxExtended>
      )}
    </WhatsAppContainer>
  );
};

export default CustomWhatsAppWidget;
