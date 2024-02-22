import Head from "next/head";
import { TemplateConfigProvider } from "./TemplateConfigContext";
import type { TemplateConfig } from "./withTemplateConfig";

interface TemplatePageHOCProps {
  title?: string
  description?: string
}
export default function templatePageHOC(
  Component: (props: any) => JSX.Element,
  templatePageHOCProps: TemplatePageHOCProps = {},
) {
  return function WrappedComponent(props: { templateConfig: TemplateConfig }) {
    return (
      <>
        <Head>
          <title>
            {templatePageHOCProps?.title 
              ? `${templatePageHOCProps.title} | ${props.templateConfig.site.title}`
              : props.templateConfig.site.title}
          </title>
          <meta name="title" content={props.templateConfig.site.title} />
          <meta name="description" content={props.templateConfig.site.description} />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://maehana.com.br/" />
          <meta property="og:title" content={props.templateConfig.site.title} />
          <meta property="og:description" content={props.templateConfig.site.description} />
          <meta property="og:image" content="https://maehana.com.br/assets/images/logo-square.png" />
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://maehana.com.br/" />
          <meta property="twitter:title" content={props.templateConfig.site.title} />
          <meta property="twitter:description" content={props.templateConfig.site.description} />
          <meta property="twitter:image" content="https://maehana.com.br/assets/images/logo-square.png" />
          <link rel="icon" href="./favicon.ico" sizes="any" />
        </Head>   
        <TemplateConfigProvider value={props.templateConfig}>
          <Component {...props} />
        </TemplateConfigProvider>
      </>
    )
  }
}
