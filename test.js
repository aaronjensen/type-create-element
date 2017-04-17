// @flow
// @jsx myCreateElement
import React from 'react'

type FooProps = {
  foo: string,
  children: number
}

type BarProps = {
  foo: string,
  children: Array<number>
}

const Foo = (props: FooProps) => null
class FooClass extends React.Component
{
  props: FooProps
}

const Bar = (props: BarProps) => null
class BarClass extends React.Component
{
  props: BarProps
}

;<Foo foo="hi" children={3} />
;<Foo foo="hi">{3}</Foo>
;<Bar foo="hi">{3}{3}{3}</Bar>

;<FooClass foo="hi" children={3} />
;<FooClass foo="hi">{3}</FooClass>
;<BarClass foo="hi">{3}{3}{3}</BarClass>
