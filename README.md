# React Scroll To Top

[![npm (scoped)](https://img.shields.io/npm/v/@fiveem/react-scroll-to-top.svg)](https://www.npmjs.com/package/@fiveem/react-scroll-to-top)

### The component scroll to top on route change

## Install

```
npm i @fiveem/react-scroll-to-top
```

## Usage

```JSX
import ScrollToTop from '@fiveem/react-scroll-to-top'

<Router>
    <ScrollToTop>
        <Switch>
            <Route exact path="/" component={FirstComponent}/>
            <Route exact path="/path" component={SecondComponent} />
        </Switch>
        <ModalSection />
    </ScrollToTop>
</Router>
```

The component must be rendered inside a Router element.


