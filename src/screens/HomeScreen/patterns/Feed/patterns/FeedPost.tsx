import Box from "@src/components/Box/Box";
import Button from "@src/components/Button/Button";
import Icon from "@src/components/Icon/Icon";
import Link from "@src/components/Link/Link";
import Text from "@src/components/Text/Text";
import { useTheme } from "@src/theme/ThemeProvider";

interface FeedPostProps {
  title: string
  excerpt: string
  url: string
  dateStart: string
  dateEnd: string
  tags: string[]
  content: string
  children: React.ReactNode
}

export function FeedPost({ title, excerpt, dateStart, dateEnd, tags, url, content }: FeedPostProps) {
  const theme = useTheme();

  const postDateStart = new Date(dateStart)
    .toLocaleDateString('pt-BR', { year: 'numeric', month: 'short' })
    .replace('.', '')
    .replace(/ de /g, '/');

  const postDateEnd = (dateEnd) ? new Date(dateEnd)
    .toLocaleDateString('pt-BR', { year: 'numeric', month: 'short' })
    .replace('.', '')
    .replace(/ de /g, '/') : 'Até o Momento';

  return (
    <Box
      styleSheet={{
        position: 'relative',
        paddingBottom: '35px',
      }}
    >
      <Box
        styleSheet={{
          position: 'absolute',
          top: 0, bottom: 0,
          color: theme.colors.neutral.x500,
          marginLeft: '-16px',
        }}
      >
        <Icon
          size="sm"
          name="clock_fill"
          styleSheet={{
            transform: {
              xs: 'translateX(-50%) scale(.9)',
              sm: 'translateX(-50%)',
            },
            position: 'absolute',
            top: '0',
            left: '0',
          }}
        />
        <Box
          styleSheet={{
            top: "16px",
            bottom: "0",
            margin: "auto",
            position: "absolute",
            width: '1px',
            backgroundColor: 'currentColor',
          }}
        />
      </Box>
      <Text
        variant="body4"
        styleSheet={{ fontWeight: 'bold', marginBottom: '12px', marginLeft: '4px' }}
      >
        {postDateStart}   -   {postDateEnd}
      </Text>
      <Link
        href={url}
        variant="body1"
        styleSheet={{
          marginBottom: '8px',
          display: 'inline',
        }}
        colorVariantEnabled={false}
      >
        <Box
          tag="h3"
          styleSheet={{
            display: 'inline',
            padding: '2px',
            color: theme.colors.neutral.x800,
          }}
        >
          {title}
        </Box>
      </Link>
      <Text
        variant="body4"
        styleSheet={{
          marginBottom: '20px'
        }}
      >
        {excerpt}
      </Text>
      <Text
        variant="body3"
        styleSheet={{
          marginBottom: '20px'
        }}
      >
        {content}
      </Text>
      <Box styleSheet={{
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: '4px',
      }}>
        {tags?.map((tag) => (
          <Button
            key={tag}
            variant="contained"
            colorVariant="primary"
            size="xs"
          >
            <Text variant="body4">
              {tag}
            </Text>
          </Button>
        ))}
      </Box>
    </Box>
  )
}