import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import 'font-awesome/css/font-awesome.css'
import './all.sass'

import {
  Container,
  Hero,
  HeroHeader,
  HeroBody,
  HeroFooter,
  Tabs,
  TabList,
  Tab,
  TabLink,
} from 'bloomer'
import AppHeader from '../components/Header'
import AppFooter from '../components/Footer'
import styled from 'styled-components'

const StyledTitleWrapper = styled.div`
  font-family: 'open sans';
`

const TemplateWrapper = ({ children }) => (
  <StyledTitleWrapper>
    <Helmet title="Please Hear Me Out" />
    <Hero isFullHeight isColor="dark" isSize="large">
      <HeroHeader>
        <AppHeader />
      </HeroHeader>

      <HeroBody>{children()}</HeroBody>

      <HeroFooter />
    </Hero>
    <AppFooter />
  </StyledTitleWrapper>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
