import React from 'react'
import PropTypes from 'prop-types'
import Modal from 'react-native-modal'
// import { useApp } from '~contexts/app.context'

import {
  ModalContainer,
  ModalDialog,
  ModalClose,
  ModalHeader,
  ModalTitle,
  ModalContent,
  IconDanger,
  IconSuccess,
  IconInfo,
} from './styles'

export function AlertModal({
  variant,
  title,
  content,
  onPress,
  isVisible = true,
}) {
  // const { platform } = useApp()

  return (
    <ModalContainer>
      <Modal isVisible={isVisible}>
        <ModalDialog type={variant}>
          <ModalClose onPress={onPress} />
          <ModalHeader>
            {variant === 'DANGER' && <IconDanger />}
            {variant === 'SUCCESS' && <IconSuccess />}
            {variant === 'INFO' && <IconInfo />}
            <ModalTitle>{title}</ModalTitle>
          </ModalHeader>
          {content ? <ModalContent>{content}</ModalContent> : ''}
        </ModalDialog>
      </Modal>
    </ModalContainer>
  )
}

AlertModal.propTypes = {
  title: PropTypes.string.isRequired,
  isVisible: PropTypes.bool.isRequired,
  onPress: PropTypes.func.isRequired,
  variant: PropTypes.string,
  content: PropTypes.string,
}
