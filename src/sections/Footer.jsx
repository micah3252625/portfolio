import React from 'react'

const Footer = () => {
    return (
        <section className="c-space pt-4 pb-3 border-t border-black-300 flex justify-between flex-wrap gap-5 items-center">
            <div className="text-white-500 flex gap-2">
                <p>Terms & Conditions</p>
                <p>|</p>
                <p>Privacy Policy</p>
            </div>

            <div className="flex gap-3 items-center py-3">
                <a href="https://github.com/micah3252625">
                    <div className="social-icon" target="_blank">
                        <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2"/>
                    </div>
                </a>
                <a href="https://www.linkedin.com/in/micah-mustaham/">
                    <div className="social-icon" target="_blank">
                        <img src="/assets/linkedin.svg" alt="github" className="w-1/2 h-1/2"/>
                    </div>
                </a>
                <p className="text-white-500">© 2024 Micah Mustaham. All rights reserved.</p>
            </div>
        </section>
    )
}
export default Footer
