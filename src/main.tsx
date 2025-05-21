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
  projectId: '3bf26c277abb57e44af9fcc2121db184', // Get one from https://cloud.walletconnect.com
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