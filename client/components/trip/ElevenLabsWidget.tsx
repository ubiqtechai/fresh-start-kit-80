import { useEffect } from "react";

// Widget loader component
export const ElevenLabsWidget = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://unpkg.com/@elevenlabs/convai-widget-embed";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="mt-6">
      <div
        dangerouslySetInnerHTML={{
          __html: `<elevenlabs-convai agent-id=\"agent_01k0e0t378ekaapqyfnv96ka97\"></elevenlabs-convai>`
        }}
      />
    </div>
  );
};