import React, { useState } from 'react';
import styled from 'styled-components';
import incentiveConfig from './incentive-config.json';

const ConfigPanel = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 20px;
  left: 20px;
  width: 320px;
  max-height: 80vh;
  background: linear-gradient(180deg, 
    rgba(15, 15, 15, 0.95) 0%, 
    rgba(10, 10, 10, 0.98) 100%
  );
  border: 1px solid rgba(0, 53, 122, 0.2);
  border-radius: 12px;
  backdrop-filter: blur(20px);
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.5);
  padding: 1.5rem;
  z-index: 10000;
  overflow-y: auto;
  display: ${props => props.$isOpen ? 'block' : 'none'};
  
  h3 {
    color: rgba(255, 255, 255, 0.9);
    margin: 0 0 1rem 0;
    font-size: 1.1rem;
  }
  
  .section {
    margin-bottom: 1.5rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    
    &:last-child {
      border-bottom: none;
    }
  }
  
  label {
    display: block;
    color: rgba(255, 255, 255, 0.8);
    font-size: 0.85rem;
    margin-bottom: 0.5rem;
    font-weight: 500;
  }
  
  input, select {
    width: 100%;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 6px;
    padding: 0.5rem;
    color: rgba(255, 255, 255, 0.9);
    font-size: 0.85rem;
    margin-bottom: 0.75rem;
    
    &:focus {
      outline: none;
      border-color: rgba(0, 53, 122, 0.5);
      box-shadow: 0 0 0 2px rgba(0, 53, 122, 0.1);
    }
  }
  
  .toggle {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 0.75rem;
    
    input[type="checkbox"] {
      width: auto;
      margin: 0;
    }
  }
  
  .message-item {
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 8px;
    padding: 0.75rem;
    margin-bottom: 0.75rem;
    
    .message-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 0.5rem;
      
      .message-id {
        font-size: 0.75rem;
        color: rgba(255, 255, 255, 0.6);
        font-family: monospace;
      }
    }
    
    .message-text {
      font-size: 0.8rem;
      color: rgba(255, 255, 255, 0.8);
      line-height: 1.3;
      margin-bottom: 0.5rem;
    }
    
    .message-meta {
      display: flex;
      gap: 1rem;
      font-size: 0.75rem;
      color: rgba(255, 255, 255, 0.6);
    }
  }
`;

const ToggleButton = styled.button`
  position: fixed;
  top: 20px;
  left: 20px;
  width: 40px;
  height: 40px;
  background: rgba(0, 53, 122, 0.8);
  border: 1px solid rgba(0, 53, 122, 0.3);
  border-radius: 8px;
  color: white;
  cursor: pointer;
  z-index: 10001;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  
  &:hover {
    background: rgba(0, 53, 122, 1);
    transform: scale(1.05);
  }
`;

interface IncentiveConfigPanelProps {
  onConfigChange?: (config: any) => void;
}

const IncentiveConfigPanel: React.FC<IncentiveConfigPanelProps> = ({ 
  onConfigChange 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [config, setConfig] = useState(incentiveConfig);

  const updateConfig = (path: string, value: any) => {
    const newConfig = { ...config };
    
    // Simplified update for specific paths we know
    if (path === 'enabled') {
      newConfig.enabled = value;
    } else if (path.startsWith('config.')) {
      const configKey = path.replace('config.', '');
      newConfig.config = { ...newConfig.config, [configKey]: value };
    }
    
    setConfig(newConfig);
    onConfigChange?.(newConfig);
  };

  const toggleMessageEnabled = (messageId: string) => {
    const messageIndex = config.messages.findIndex(m => m.id === messageId);
    if (messageIndex !== -1) {
      const newMessages = [...config.messages];
      newMessages[messageIndex] = {
        ...newMessages[messageIndex],
        enabled: !newMessages[messageIndex].enabled
      };
      setConfig({
        ...config,
        messages: newMessages
      });
    }
  };

  // Solo mostrar en desarrollo
  if (process.env.NODE_ENV === 'production') {
    return null;
  }

  return (
    <>
      <ToggleButton onClick={() => setIsOpen(!isOpen)}>
        ⚙️
      </ToggleButton>
      
      <ConfigPanel $isOpen={isOpen}>
        <h3>🎛️ Configuración de Incentivos</h3>
        
        <div className="section">
          <div className="toggle">
            <input
              type="checkbox"
              checked={config.enabled}
              onChange={(e) => updateConfig('enabled', e.target.checked)}
            />
            <label>Habilitar sistema de incentivos</label>
          </div>
        </div>
        
        <div className="section">
          <label>Intervalo entre mensajes (ms)</label>
          <input
            type="number"
            value={config.config.displayInterval}
            onChange={(e) => updateConfig('config.displayInterval', parseInt(e.target.value))}
          />
          
          <label>Duración del mensaje (ms)</label>
          <input
            type="number"
            value={config.config.displayDuration}
            onChange={(e) => updateConfig('config.displayDuration', parseInt(e.target.value))}
          />
          
          <label>Máximo mensajes por sesión</label>
          <input
            type="number"
            value={config.config.maxDisplaysPerSession}
            onChange={(e) => updateConfig('config.maxDisplaysPerSession', parseInt(e.target.value))}
          />
          
          <label>Delay inicial (ms)</label>
          <input
            type="number"
            value={config.config.delayAfterPageLoad}
            onChange={(e) => updateConfig('config.delayAfterPageLoad', parseInt(e.target.value))}
          />
        </div>
        
        <div className="section">
          <h4 style={{ color: 'rgba(255, 255, 255, 0.9)', margin: '0 0 1rem 0' }}>
            Mensajes ({config.messages.filter(m => m.enabled).length} activos)
          </h4>
          
          {config.messages.map((message) => (
            <div key={message.id} className="message-item">
              <div className="message-header">
                <span className="message-id">{message.id}</span>
                <div className="toggle">
                  <input
                    type="checkbox"
                    checked={message.enabled}
                    onChange={() => toggleMessageEnabled(message.id)}
                  />
                </div>
              </div>
              
              <div className="message-text">
                {message.text}
              </div>
              
              <div className="message-meta">
                <span>Prioridad: {message.priority}</span>
                <span>Contextos: {message.contexts.join(', ')}</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="section">
          <button
            onClick={() => setIsOpen(false)}
            style={{
              width: '100%',
              padding: '0.75rem',
              background: 'rgba(239, 68, 68, 0.8)',
              border: '1px solid rgba(239, 68, 68, 0.3)',
              borderRadius: '6px',
              color: 'white',
              cursor: 'pointer'
            }}
          >
            Cerrar Panel
          </button>
        </div>
      </ConfigPanel>
    </>
  );
};

export default IncentiveConfigPanel;
