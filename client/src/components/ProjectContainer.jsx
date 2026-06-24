import React from "react";
import asanAIQ from "../assets/asanAIQ.png";
import zerodha from "../assets/zerodha.png";
import expense from "../assets/expense.jpg";
import inventory from "../assets/inventory.png";
import restaurant from "../assets/restaurant.jpg";
import travel from "../assets/travel.jpg";
import videoCall from "../assets/video-call.jpg";

export default function ProjectContainer() {
  return (
    <>
      <div className="bg-base-200 rounded-xl shadow p-5 hover:shadow-lg transition">
        <img src={asanAIQ} alt={`Project`} className="rounded-lg" />
        <h3 className="mt-4 font-bold text-lg">
          AI-Powered Fitness & Wellness Platform
        </h3>
        <p className="text-base-content/70 mt-2">
          An AI-powered fitness platform that helps users receive personalized 
          yoga plans and health insights while connecting with trainers through real-time chat
          and booking features. Built using React, Firestore, and AI APIs for a seamless user 
          experience.
        </p>
        <a href="https://asana-iq.vercel.app/">
          view demo
        </a>
      </div>
      <div className="bg-base-200 rounded-xl shadow p-5 hover:shadow-lg transition">
        <img src={zerodha} alt={`Project`} className="rounded-lg" />
        <h3 className="mt-4 font-bold text-lg">
          Online Trading Platform - Zerodha Clone
        </h3>
        <p className="text-base-content/70 mt-2">
          A Zerodha Clone is a trading platform replica that simulates Zerodha’s
          core features like live market data, order placement, and portfolio
          tracking, built for learning or demonstration using modern web
          technologies.
        </p>
        <a href="https://trading-dashboard-rho-olive.vercel.app/">
          view demo
        </a>
      </div>
      
      <div className="bg-base-200 rounded-xl shadow p-5 hover:shadow-lg transition">
        <img src={restaurant} alt={`Project`} className="rounded-lg" />
        <h3 className="mt-4 font-bold text-lg">
          Restaurant Reservation System
        </h3>
        <p className="text-base-content/70 mt-2">
          A platform that allows customers to book tables online, while helping
          restaurants manage reservations, seating arrangements, and customer
          flow efficiently.
        </p>
        <a href="https://restaurant-frontend-v6l8.onrender.com/">view demo</a>
      </div>
      <div className="bg-base-200 rounded-xl shadow p-5 hover:shadow-lg transition">
        <img src={travel} alt={`Project`} className="rounded-lg" />
        <h3 className="mt-4 font-bold text-lg">
          Smart Travel Planning & Booking Platform
        </h3>
        <p className="text-base-content/70 mt-2">
          TripEase is an all-in-one travel solution that allows users to search
          destinations, compare prices, book transportation and accommodations,
          and manage detailed itineraries, making trip planning effortless and
          organized.
        </p>
        <a href="https://travel-ssai.onrender.com/#gallery">view demo</a>
      </div>
      <div className="bg-base-200 rounded-xl shadow p-5 hover:shadow-lg transition">
        <img src={expense} alt={`Project`} className="rounded-lg" />
        <h3 className="mt-4 font-bold text-lg">
          Personal Finance & Expense Management System
        </h3>
        <p className="text-base-content/70 mt-2">
          SpendWise helps users track daily expenses, categorize spending, set
          budgets, and analyze financial habits, empowering them to make
          informed decisions and achieve better financial contro.
        </p>
        <a href="https://expense-tracker-frontend-8zmn.onrender.com/">
          view demo
        </a>
      </div>
      <div className="bg-base-200 rounded-xl shadow p-5 hover:shadow-lg transition">
        <img src={videoCall} alt={`Project`} className="rounded-lg" />
        <h3 className="mt-4 font-bold text-lg">
          Real-Time HD Video Conferencing
        </h3>
        <p className="text-base-content/70 mt-2">
          ConnectNow is a powerful video communication platform offering
          high-quality video calls, group meetings, screen sharing, and
          collaboration tools to enable smooth, real-time interaction for
          personal and professional needs.
        </p>
        <a href="https://github.com/TannuSaini488/Video-call">view demo</a>
      </div>
    </>
  );
}
