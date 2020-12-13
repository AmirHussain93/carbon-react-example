import React from 'react'

function SideBar() {
    return (
        <div className="sidebar-container">
            <>
                <div
                    className="sidebar-content"
                >
                    <div className="sidebar-header">
                        <p className="text">Risk-centered</p>
                        <p className="sub-text">Vulnerability Management</p>
                    </div>

                    <div className="sidebar-footer">
                        <p className="footer-text">Security workflows</p>
                        <p className="footer-subtext">Create and run playbooks to integrate security into your CI/CD pipeline.</p>
                    </div>
                    
                </div>
            </>
        </div>
    )
}

export default SideBar