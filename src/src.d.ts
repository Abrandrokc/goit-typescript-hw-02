// css.d.ts
declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}
declare module 'react-loader-spinner' {
  export class Vortex extends React.Component<{ [key: string]: any }> {}
}