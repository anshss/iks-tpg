import React, { useEffect, useState } from "react";
import {
    checkIfWhitelisted,
    mintNFT,
    currentUserAddr,
    fetchUserAddress,
} from "../utils";
import ReactConfetti from "react-confetti";
import { ethers } from "ethers";

const NFT = () => {
    const [loading, setLoading] = useState(false);
    const [isWhitelisted, setIsWhitelisted] = useState(null);
    const [isWallet, setIsWallet] = useState(false);

    const [windowDimension, setDimension] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    const [Btn, setBtn] = useState(false);
    const detectSize = () => {
        setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const { provider: ethereum } = provider;
    ethereum.on("accountsChanged", fetchUserAddressCall);
    ethereum.on("chainChanged", fetchUserAddressCall);

    useEffect(() => {
        window.addEventListener("resize", detectSize);
        return () => {
            window.removeEventListener("resize", detectSize);
        };
    }, [windowDimension]);

    // useEffect(() => {
    //     if (currentUserAddr === "") {
    //         setIsWallet(false);
    //     } else {
    //         setIsWallet(true);
    //     }
    // }, [currentUserAddr]);

    // useEffect(() => {
    //     // checkIfWalletConnected();
    //     // checkIfWhitelistedCall();
    // }, [currentUserAddr]);

    async function fetchUserAddressCall() {
        await fetchUserAddress()
        if (currentUserAddr === "") {
            setIsWallet(false);
        } else {
            setIsWallet(true);
            await checkIfWhitelistedCall()
        }

    }
    async function checkIfWhitelistedCall() {
        const isWhitelisted = await checkIfWhitelisted();
        if (isWhitelisted === true) {
            setIsWhitelisted(true);
        } else {
            setIsWhitelisted(false);
        }
    }

    async function mintNFTCall() {
        setLoading(true);
        await mintNFT();
        setLoading(false);
        setBtn(!Btn);
    }

    function NotWhitelisted() {
        return (
            <div className="text-white py-2 px-10 space-x-1 mt-4 blue-glassmorphism rounded-md font-semibold">
                You are not whitelisted
            </div>
        );
    }

    function ClaimButton() {
        if (loading) {
            return (
                <button
                    onClick={mintNFTCall}
                    className="px-[50px] py-2 bg-[#8A42D8] text-white rounded-xl no-underline font-semibold"
                >
                    <div className="loading-circle"></div>
                </button>
            );
        }
        return (
            <button
                onClick={mintNFTCall}
                className="px-11 py-4 bg-[#9966CC] text-white rounded-xl no-underline font-semibold mt-4"
            >
                Claim Now
                {/*  */}
            </button>
        );
    }

    function NotConnected() {
        return (
            <div className="text-white py-2 px-10 space-x-1 mt-4 blue-glassmorphism rounded-md font-semibold">
                Wallet not connected
            </div>
        );
    }

    return (
        <div>
            <div>
                <h1 className="feature-h1">Congratulations 🥳</h1>
            </div>
            <div className="gradient-03 z-0" />

            <div className="container">
                <div className="card">
                    <div className="blue-glassmorphism z-0" />
                    <div className="content">
                        <img src="/nft2.png" alt="" />
                        <div className="pink__gradient z-0" />
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center">
                {isWallet ? (
                    isWhitelisted ? (
                        <ClaimButton />
                    ) : (
                        <NotWhitelisted />
                    )
                ) : (
                    <NotConnected />
                )}
            </div>
            {Btn && (
                <ReactConfetti
                    width={windowDimension.width}
                    height={windowDimension.height}
                    tweenDuration={500}
                />
            )}
        </div>
    );
};

export default NFT;
