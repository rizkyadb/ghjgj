import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { getDefaultConfig, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import { mainnet } from 'wagmi/chains';
import '@rainbow-me/rainbowkit/styles.css';
import App from './App.tsx';
import './index.css';

const config = getDefaultConfig({
  appName: '$CIGAR Protocol',
  projectId: 'YOUR_PROJECT_ID', // Get one from https://cloud.walletconnect.com
  chains: [mainnet],
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <WagmiProvider config={config}>
      <RainbowKitProvider>
        <App />
      </RainbowKitProvider>
    </WagmiProvider>
  </StrictMode>
);