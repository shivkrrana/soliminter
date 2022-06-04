import React, { FC, useMemo } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import {
    GlowWalletAdapter,
    LedgerWalletAdapter,
    PhantomWalletAdapter,
    SlopeWalletAdapter,
    SolflareWalletAdapter,
    SolletExtensionWalletAdapter,
    SolletWalletAdapter,
    TorusWalletAdapter,
} from '@solana/wallet-adapter-wallets';
import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';
require('./style.css');

export const Wallet = () => {
    const network = WalletAdapterNetwork.Devnet;
    const endpoint = useMemo(() => clusterApiUrl(network), [network]);
    const wallets = useMemo(
        () => [
            new PhantomWalletAdapter(),
            new GlowWalletAdapter(),
            new SlopeWalletAdapter(),
            new SolflareWalletAdapter({ network }),
            new TorusWalletAdapter(),
        ],
        [network]
    );

    return (
        <div className="sidebar_container">
        <div className="logo">
            <img src="assets/logo.svg" alt="logo" />
        </div>
        <div className="connectwallet">
        <div className='button'>
        <ConnectionProvider endpoint={endpoint}>
            <WalletProvider wallets={wallets} autoConnect>
                <WalletModalProvider>
                    <WalletMultiButton/>
                </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
        </div>
        </div>
        <div className="sidebar_options">
            <div className="option">
                <img src="assets/token.svg" alt="token" /><span>Token managemet</span>
            </div>
            <div className="option">
            <img src="assets/ido.svg" alt="ido" /><span>Apply for IDO</span>
            </div>
            <div className="option">
            <img src="assets/nft.svg" alt="nft" /><span>NFT</span>
            </div>
            <div className="option">
            <img src="assets/doc.svg" alt="token" /><span>Documentation</span>
            </div>
        </div>
        <div className="connect_container">
            <div>
            Connect with us
            </div>
            <div className="connect">
                <div className="twit_tele">
                <img src="assets/twitter.svg" alt="twitter" />
                </div>
                <div className="twit_tele">
                <img src="assets/telegram.svg" alt="telegram" />
                </div>
            </div>
            <div className="footer">
            <div>
                <img src="assets/solana.svg" alt="" />
            </div>
            <div>
            © Solminter 2021
            </div>

        </div>
        </div>
        
    </div>
    );
};