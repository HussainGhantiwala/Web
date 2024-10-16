import React, { useState } from 'react';
import { BarChart2, PieChart, ChevronLeft, PlusCircle } from 'lucide-react'; //run npm install lucide-react --force in terminal
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'; //run npm install recharts --force
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Modal, Button as BootstrapButton, Card as BootstrapCard, Tabs, Tab } from 'react-bootstrap'; // Import Bootstrap components run npm install bootstrap react-bootstrap --force

const data = [
  { name: 'Mon', expenses: 1000, income: 1500 },
  { name: 'Tue', expenses: 1200, income: 1500 },
  { name: 'Wed', expenses: 800, income: 1500 },
  { name: 'Thu', expenses: 1500, income: 1500 },
  { name: 'Fri', expenses: 2000, income: 2000 },
  { name: 'Sat', expenses: 1800, income: 1500 },
  { name: 'Sun', expenses: 1300, income: 1500 },
];

export default function StatisticsScreen({ onBack }) {
  const [showAddExpense, setShowAddExpense] = useState(false);
  const [showAddIncome, setShowAddIncome] = useState(false);

  return (
    <BootstrapCard className="bg-light text-dark">
      <BootstrapCard.Header>
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <BootstrapButton variant="outline-secondary" onClick={onBack}>
              <ChevronLeft className="h-6 w-6" />
            </BootstrapButton>
            <h5 className="ml-2 mb-0">Statistics</h5>
          </div>
          <BootstrapButton variant="outline-secondary" onClick={() => setShowAddExpense(true)}>
            <PlusCircle className="h-4 w-4 mr-2" /> Add Expense
          </BootstrapButton>
        </div>
      </BootstrapCard.Header>
      <BootstrapCard.Body>
        <Tabs defaultActiveKey="expenses" id="stats-tabs" className="mb-4">
          <Tab eventKey="expenses" title="Expenses">
            <BootstrapCard className="bg-light mb-4">
              <BootstrapCard.Body>
                <h5 className="mb-2">Total Expenses</h5>
                <p className="display-4 mb-4">₹2,364.00</p>
                <ResponsiveContainer width="100%" height={200}>
                  <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="expenses" stroke="#f97316" />
                  </LineChart>
                </ResponsiveContainer>
              </BootstrapCard.Body>
            </BootstrapCard>
            <h5>Expenses by Category</h5>
            <div className="space-y-2">
              {[
                { category: 'Shopping', amount: 895.99, icon: <PieChart className="h-4 w-4" /> },
                { category: 'Transportation', amount: 286.34, icon: <BarChart2 className="h-4 w-4" /> },
              ].map((item) => (
                <div key={item.category} className="d-flex justify-content-between align-items-center bg-light p-3 mb-2 rounded">
                  <div className="d-flex align-items-center">
                    <div className="bg-warning p-2 rounded-circle me-3">
                      {item.icon}
                    </div>
                    <span>{item.category}</span>
                  </div>
                  <span>₹{item.amount}</span>
                </div>
              ))}
            </div>
          </Tab>
          <Tab eventKey="income" title="Income">
            <BootstrapCard className="bg-light mb-4">
              <BootstrapCard.Body>
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <h5>Total Income</h5>
                  <BootstrapButton variant="outline-secondary" onClick={() => setShowAddIncome(true)}>
                    <PlusCircle className="h-4 w-4 mr-2" /> Add Income
                  </BootstrapButton>
                </div>
                <p className="display-4 mb-4">₹4,500.00</p>
                <ResponsiveContainer width="100%" height={200}>
                  <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="income" stroke="#22c55e" />
                  </LineChart>
                </ResponsiveContainer>
              </BootstrapCard.Body>
            </BootstrapCard>
          </Tab>
        </Tabs>
      </BootstrapCard.Body>

      {/* Add Expense Modal */}
      <AddExpenseModal show={showAddExpense} onHide={() => setShowAddExpense(false)} />
      {/* Add Income Modal */}
      <AddIncomeModal show={showAddIncome} onHide={() => setShowAddIncome(false)} />
    </BootstrapCard>
  );
}

function AddExpenseModal({ show, onHide }) {
  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Add Expense</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={(e) => { e.preventDefault(); onHide(); }}>
          <div className="mb-3">
            <label htmlFor="expense-amount" className="form-label">Amount</label>
            <input type="number" className="form-control" id="expense-amount" placeholder="Enter amount" required />
          </div>
          <div className="mb-3">
            <label htmlFor="expense-category" className="form-label">Category</label>
            <input type="text" className="form-control" id="expense-category" placeholder="Enter category" required />
          </div>
          <div className="mb-3">
            <label htmlFor="expense-date" className="form-label">Date</label>
            <input type="date" className="form-control" id="expense-date" required />
          </div>
          <div className="d-flex justify-content-end">
            <BootstrapButton variant="secondary" className="me-2" onClick={onHide}>Cancel</BootstrapButton>
            <BootstrapButton type="submit" variant="primary">Add Expense</BootstrapButton>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
}

function AddIncomeModal({ show, onHide }) {
  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Add Income</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={(e) => { e.preventDefault(); onHide(); }}>
          <div className="mb-3">
            <label htmlFor="income-amount" className="form-label">Amount</label>
            <input type="number" className="form-control" id="income-amount" placeholder="Enter amount" required />
          </div>
          <div className="mb-3">
            <label htmlFor="income-source" className="form-label">Source</label>
            <input type="text" className="form-control" id="income-source" placeholder="Enter source" required />
          </div>
          <div className="mb-3">
            <label htmlFor="income-date" className="form-label">Date</label>
            <input type="date" className="form-control" id="income-date" required />
          </div>
          <div className="d-flex justify-content-end">
            <BootstrapButton variant="secondary" className="me-2" onClick={onHide}>Cancel</BootstrapButton>
            <BootstrapButton type="submit" variant="primary">Add Income</BootstrapButton>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
}
