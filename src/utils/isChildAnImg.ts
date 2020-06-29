import { get } from 'lodash'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isChildAnImg = (children: React.ReactNode | any): boolean =>
  children && Boolean(get(children[0], 'props.src', false))

export default isChildAnImg
