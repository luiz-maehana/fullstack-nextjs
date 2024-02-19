import React from 'react'
import { StyleSheet } from '@src/theme/StyleSheet'
import { BaseComponent } from '@src/theme/BaseComponent'

interface BoxProps {
  tag?: 'main' | 'div' | string
  children?: React.ReactNode
  styleSheet?: StyleSheet
}

export default function Box({ styleSheet, children, tag, ...props }: BoxProps) {
  const Tag = tag || 'div'
  return (
    <BaseComponent as={Tag} styleSheet={styleSheet} {...props}>
      {children}
    </BaseComponent>
  )
}