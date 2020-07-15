import React from 'react';
import AppShell from 'theme/ui/AppShell';

const withAppShell = (WrappedComponent: any) => {
  class WithAppShell extends React.Component {
    public displayName: string = `WithAppShell(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;
    render() {
      return (
        <AppShell>
            <header role="banner"></header>
            <main role="main">
                <WrappedComponent
                    {...this.props}
                />
            </main>
            <footer></footer>
        </AppShell>
      );
    }
  }
  return WithAppShell;
};

export default withAppShell;
