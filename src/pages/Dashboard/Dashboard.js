import React from 'react';

const Dashboard = () => {
    return (
        <div class="drawer drawer-mobile  mt-16">
            <input id="dashboard-drawer" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content flex flex-col items-center justify-center bg-base-300">
                {/* <!-- Page content here --> */}
                hello


            </div>
            <div class="drawer-side ">
                <label for="dashboard-drawer" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><a>Sidebar Item 1</a></li>
                    <li><a>Sidebar Item 2</a></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;