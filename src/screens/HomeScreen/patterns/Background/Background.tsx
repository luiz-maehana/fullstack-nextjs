import Box from "@src/components/Box/Box";
import Text from "@src/components/Text/Text";

export default function Background() {
  const imageUrl = 'https://media.licdn.com/dms/image/D4D16AQHmae-gTTLllQ/profile-displaybackgroundimage-shrink_350_1400/0/1684859984717?e=1714003200&v=beta&t=ZSKw0pZ0CB4VDCfUOEwVItmu67jwfP16j4zQ4V_Mi1k';
  return (
    <Box
      styleSheet={{
        width: '100%',
        height: '400px',
        backgroundImage: `url("${imageUrl}")`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    />
  )
}
