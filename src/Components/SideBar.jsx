import React from "react";
import User from "../Assets/images/user.png";
import Wallet from "../Assets/images/wallet.png";
import Line from "../Assets/images/line.png";
import Deploy from "../Assets/images/deploy.png";
import { Link } from "react-router-dom";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function SideBar() {
    return (
        <div className="flex">
            <section className="sidebar z-0">
                <div className=" gradient-04 z-0" />

                <div className="dash-side">
                    {/* <div className="heading">I KNOW SPOTS</div> */}
                    <div className="heading">
                        <Link to="/">
                            <img
                                src="/logo.png"
                                className="w-[150px] "
                                alt=""
                            />
                        </Link>
                    </div>

                    <ConnectButton showBalance={false} accountStatus="icon"/>

                    <div className="functions">
                        <div className="dash-content">
                            <div className="dash-wallet">
                                <div>
                                    <img src={Wallet} alt="" />
                                </div>
                                <div>
                                    <img src={Line} alt="" />
                                </div>
                            </div>
                            <div className="dash-username">
                                Sign in with your wallet
                            </div>
                        </div>
                        <div className="dash-content">
                            <div className="dash-wallet">
                                <div>
                                    <img src={User} alt="" />
                                </div>
                            </div>
                            <div className="dash-username">
                                Claim your Quiz Prizes
                            </div>
                        </div>
                        <div className="dash-content">
                            <div>
                                <img src={Deploy} alt="" />
                            </div>
                            <div className="dash-username">
                                Congratulations 🎉
                            </div>
                        </div>
                        <img src="/Ellipse.svg" alt="/Ellipse.svg"/>
                
                    </div>
                </div>
            </section>
        </div>
    );
}
