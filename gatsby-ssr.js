export const onRenderBody = ({ setHtmlAttributes }) => {
  setHtmlAttributes({
    style: { scrollBehavior: 'smooth', fontFamily: 'Roboto' },
  })
}
