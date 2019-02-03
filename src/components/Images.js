import React from 'react'
import { Container, Divider, Image } from 'semantic-ui-react'

import bash from '../images/bash.png'
import git from '../images/git.svg'
import heroku from '../images/heroku.png'
import htmlcss from '../images/htmlcss.svg'
import java from '../images/java.png'
import junit from '../images/junit.png'
import mongo from '../images/mongo.png'
import node from '../images/node.png'
import python from '../images/python.png'
import react from '../images/react.png'
import redux from '../images/redux.png'
import sqlite from '../images/sqlite.svg'
import travis from '../images/travis.png'

const Images = [
  <Container>
    <Image src={java} size={'tiny'} centered />
    <Divider hidden />
    <Divider hidden />
    <Image src={junit} size={'small'} centered />
  </Container>,
  <Container>
    <Divider hidden />
    <Image src={python} size={'small'} centered />
    <Divider hidden />
    <Image src={sqlite} size={'small'} centered />
    <Divider hidden />
    <Image src={htmlcss} size={'small'} centered />
  </Container>,
  <Container>
    <Image src={react} size={'small'} centered />
    <Divider hidden />
    <Divider hidden />
    <Image src={redux} size={'small'} centered />
  </Container>,
  <Container>
    <Image src={node} size={'small'} centered />
    <Image src={mongo} size={'medium'} centered />
  </Container>,
  <Container>
    <Image src={bash} size={'small'} centered />
    <Divider hidden />
    <Image src={heroku} size={'small'} centered />
  </Container>,
  <Container>
    <Image src={git} size={'small'} centered />
    <Divider hidden />
    <Divider hidden />
    <Image src={travis} size={'small'} centered />
  </Container>
]

export default Images
