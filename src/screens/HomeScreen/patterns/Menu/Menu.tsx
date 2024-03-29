import Box from "@src/components/Box/Box";
import Button from "@src/components/Button/Button";
import Icon from "@src/components/Icon/Icon";
import Text from "@src/components/Text/Text";
import { useTheme } from "@src/theme/ThemeProvider";
import { useTemplateConfig } from "@src/services/template/TemplateConfigContext";
import Image from "@src/components/Image/Image";

export default function Menu() {
  const theme = useTheme();
  const templateConfig = useTemplateConfig();
  const baseSize = '140px';
  const xsBaseSize = '100px';
  return (
    <Box
      styleSheet={{
        width: '100%',
        position: 'absolute',
        left: 0, right: 0, top: 0,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: '16px',
        paddingHorizontal: '20px',
        color: theme.colors.neutral.x000,
      }}
    >
      <Button.Base
        styleSheet={{
          width: {
            xs: xsBaseSize,
            md: baseSize
          },
          height: {
            xs: xsBaseSize,
            md: baseSize
          },
          backgroundColor: theme.colors.primary.x500,
          borderRadius: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          hover: {
            backgroundColor: theme.colors.primary.x400,
          },
          focus: {
            backgroundColor: theme.colors.primary.x600,
          },
        }}
      >
        <Image
          styleSheet={{
            width: '100%',
            height: '100%'
          }}
          src={templateConfig?.personal?.logo} alt={templateConfig?.personal?.initial} />
      </Button.Base>
    </Box>
  )
}
