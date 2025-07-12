"use client"

import { useEffect } from "react"

declare global {
  interface Window {
    vapiSDK: {
      run: (config: {
        apiKey: string;
        assistant: string;
        config: any;
      }) => any;
    };
  }
}

interface VapiInstance {
  stop: () => void;
}

export default function VapiIntegration() {
  useEffect(() => {
    var vapiInstance: VapiInstance | null = null;
    const assistant = "8542df2a-047f-43db-be24-658552b8a403";
    const apiKey = "92205ca1-8f79-4a4b-bbfe-5a83a933f5a3";
    const buttonConfig = {
      position: "top-left",
      width: "150px",
      height: "150px",
      idle: {
        color: `rgb(93, 254, 202)`,
        type: "round",
        icon: `https://unpkg.com/lucide-static@0.321.0/icons/bot.svg`,
        iconSize: "24px"
      },
      loading: {
        color: `rgb(93, 124, 202)`,
        type: "round",
        icon: `https://unpkg.com/lucide-static@0.321.0/icons/loader-2.svg`,
        iconSize: "24px"
      },
      active: {
        color: `rgb(255, 0, 0)`,
        type: "round",
        icon: `https://unpkg.com/lucide-static@0.321.0/icons/phone.svg`,
        iconSize: "24px"
      },
    };

    (function (d: Document, t: string) {
      var g = document.createElement(t) as HTMLScriptElement;
      var s = d.getElementsByTagName(t)[0];
      g.src = "https://cdn.jsdelivr.net/gh/VapiAI/html-script-tag@latest/dist/assets/index.js";
      g.defer = true;
      g.async = true;
      if (s && s.parentNode) {
        s.parentNode.insertBefore(g, s);
      }
      g.onload = function () {
        vapiInstance = window.vapiSDK.run({
          apiKey: apiKey,
          assistant: assistant,
          config: buttonConfig,
        });
        
        // Create wrapper for the button
        const buttonContainer = document.querySelector('.vapi-button-container') as HTMLElement;
        if (buttonContainer) {
          const headerButtonContainer = document.getElementById('vapi-button-container');
          if (headerButtonContainer) {
            headerButtonContainer.appendChild(buttonContainer);
            // Add flashing animation and positioning
            buttonContainer.style.animation = 'pulse 2s infinite';
            buttonContainer.style.borderRadius = '50%';
            buttonContainer.style.boxShadow = '0 0 10px rgba(93, 254, 202, 0.5)';
            buttonContainer.style.position = 'fixed';
            buttonContainer.style.top = '20px';
            buttonContainer.style.right = '20px';
            buttonContainer.style.zIndex = '9999';
          }
        }
        
        const chatContainer = document.querySelector('.vapi-chat-container') as HTMLElement;
        if (chatContainer) {
          chatContainer.style.position = 'fixed';
          chatContainer.style.top = '80px';
          chatContainer.style.right = '20px';
          chatContainer.style.zIndex = '9999';
        }
      };
    })(document, "script");

    // Cleanup function
    return () => {
      if (vapiInstance) {
        vapiInstance.stop();
      }
    };
  }, []);

  return null;
}
