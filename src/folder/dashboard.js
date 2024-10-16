import React, { useState } from 'react';
import { BarChart2, IndianRupee,  User } from 'lucide-react';

import { Modal, Button as BootstrapButton } from 'react-bootstrap'; // Import Modal and Bootstrap Button

export default function DashboardScreen() {

  const [isUserInfoOpen, setIsUserInfoOpen] = useState(false);

  return (
    <div className="card bg-light text-dark">
      <div className="card-header d-flex justify-content-between align-items-center">
        <div>
          <h5 className="card-title mb-0">Good Morning,</h5>
          <p className="text-muted mb-0">Kristin Watson</p>
        </div>
        <BootstrapButton variant="outline-secondary" onClick={() => setIsUserInfoOpen(true)}>
          <User className="h-6 w-6" />
        </BootstrapButton>
      </div>

      <div className="card-body">
        {/* Balance Card */}
        <div className="card bg-light mb-4">
          <div className="card-body">
            <p className="text-muted mb-1">Your Balance</p>
            <h2 className="card-title mb-2">₹12,692.00</h2>
            <p className="text-muted">**** **** **** 4678</p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="row text-center mb-4">
          {['Transfer', 'Savings', 'Loans', 'More'].map((service) => (
            <div className="col-3" key={service}>
              <BootstrapButton variant="outline-secondary" className="w-100 p-3">
                <IndianRupee className="mb-1" />
                <div className="small">{service}</div>
              </BootstrapButton>
            </div>
          ))}
        </div>

        {/* Recent Transactions */}
        <h5 className="mb-3">Recent Transactions</h5>
        <div className="d-flex justify-content-between bg-light p-3 rounded">
          <div className="d-flex align-items-center">
            <div className="bg-warning p-2 rounded-circle me-3">
              <BarChart2 className="h-4 w-4" />
            </div>
            <div>
              <p className="mb-0">Concert Tickets</p>
              <p className="text-muted small mb-0">2023-05-16</p>
            </div>
          </div>
          <p className="font-weight-bold">₹150.39</p>
        </div>

        {/* View Statistics Button */}
        <div className="mt-4 text-end">
          
        </div>
      </div>

      {/* User Info Modal */}
      <Modal show={isUserInfoOpen} onHide={() => setIsUserInfoOpen(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>User Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="text-center">
            <img src="/placeholder.svg?height=100&width=100" alt="User" className="rounded-circle mb-3" width="100" />
            <h5>Kristin Watson</h5>
            <p className="text-muted small">kristin.watson@example.com</p>
            <div className="text-start">
              <p><strong>Account Number:</strong> XXXX-XXXX-1234</p>
              <p><strong>Joined:</strong> January 15, 2023</p>
              <p><strong>Last Login:</strong> Today, 9:30 AM</p>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}
