import React from 'react';
import Box from "@src/components/Box/Box";
import Text from "@src/components/Text/Text";
import Icon from "@src/components/Icon/Icon";
import Image from "@src/components/Image/Image";
import Link from "@src/components/Link/Link";
import Button from "@src/components/Button/Button";
import { useTheme } from "@src/theme/ThemeProvider";
import { useTemplateConfig } from "@src/services/template/TemplateConfigContext";
import type { Post } from '@src/services/posts/PostsService';
import { FeedPost } from './patterns/FeedPost';

interface FeedProps {
  children: React.ReactNode;
}
export default function Feed({ children }) {
  const theme = useTheme();
  return (
    <Box
      styleSheet={{
        backgroundColor: theme.colors.neutral.x000,
        marginTop: '-228px',
        width: '100%',
        maxWidth: '683px',
        borderRadius: '8px',
        paddingTop: '40px',
        paddingHorizontal: '32px',
      }}
    >
      {children}
    </Box>
  )
}

Feed.Header = () => {
  const theme = useTheme();
  const templateConfig = useTemplateConfig();

  return (
    <Box
      styleSheet={{
        borderBottom: `1px solid ${theme.colors.neutral.x200}`,
        paddingBottom: '24px',
        marginBottom: '24px',
      }}
    >
      <Box
        styleSheet={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          gap: '16px',
          marginBottom: '16px'
        }}
      >
        <Image
          styleSheet={{
            width: { xs: '100px', md: '128px' },
            height: { xs: '100px', md: '128px' },
            borderRadius: '100%',
          }}
          src={templateConfig?.personal?.avatar}
          alt={`Imagem de perfil do ${templateConfig?.personal?.name}`}
        />

        <Box
          styleSheet={{
            flexDirection: "column",
            gap: "4px",
          }}
        >
          {Object.keys(templateConfig.personal.socialNetworks).map(key => {
            const socialNetwork = templateConfig.personal.socialNetworks[key];
            if (socialNetwork) {
              return (
                <Link
                  key={key}
                  target="_blank"
                  href={templateConfig.personal.socialNetworks[key]}
                >
                  <Button.Base>
                    <Icon name={key as any} />
                  </Button.Base>
                </Link>
              )
            }
            return null;
          })}
        </Box>

      </Box>
      <Text tag="h1" variant="heading4">
        {templateConfig?.personal?.name}
      </Text>


    </Box>
  )
}

interface FeedPostsProps {
  posts: Post[]
}

Feed.Posts = ({ posts }: FeedPostsProps) => {
  return (
    <Box>
      <Text variant='heading3' styleSheet={{
        marginBottom: '24px'
      }}>
        Experiência Profissional
      </Text>
      {posts.map(({ title, slug, metadata, content }) => {
        const { dateStart, dateEnd, excerpt, url, tags } = metadata
        return (
          <FeedPost
            key={slug}
            title={title}
            dateStart={dateStart}
            dateEnd={dateEnd}
            excerpt={excerpt}
            url={url}
            tags={tags}
            content={content}
          >
          </FeedPost>
        )
      })}
    </Box>
  )
}
