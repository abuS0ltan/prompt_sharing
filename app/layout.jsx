import '@styles/global.css';
import Nav from '@components/Nav'; '@components/Nav';
import Provider from '@components/Provider'; '@components/Provider';
export const metadata ={
    title: 'Promptopia',
    description: 'A platform to discover & share ai prompts'
  };


const RootLayout = ({children}) => {
  return (
    <html>
        <body>
            <Provider>

                <div className="main">
                    <div className='gradient'/>
                </div>
                
                <main className='app'>
                    <Nav/>
                    {children}
                </main>
            </Provider>
        </body>
    </html>
  )
}

export default RootLayout;