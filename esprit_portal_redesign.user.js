// ==UserScript==
// @name         Esprit Portal Redesign
// @namespace    https://github.com/arfaouiahmed1/Esprit-Portal-Redesign
// @version      1.0
// @description  Modern UI redesign for Esprit Student Portal with animations and professional look
// @author       arfaouiahmed1
// @match        *://esprit-tn.com/esponline/Etudiants/*
// @match        *://*.esprit-tn.com/esponline/Etudiants/*
// @match        *://esprit.tn/esponline/Etudiants/*
// @match        *://*.esprit.tn/esponline/Etudiants/*
// @grant        GM_addStyle
// @run-at       document-start
// @require      https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.js
// ==/UserScript==

(function() {
    'use strict';
    
    // Performance monitoring
    const perfData = {
        start: performance.now(),
        domLoaded: 0,
        stylesApplied: 0,
        scriptsApplied: 0,
        completed: 0
    };

    // ==========================================
    // STYLES
    // ==========================================
    
    // Base theme colors
    const THEME = {
        primary: '#1565c0',      // Deep blue
        secondary: '#0d47a1',    // Darker blue
        accent: '#2196f3',       // Lighter blue
        text: '#212121',         // Almost black
        textLight: '#757575',    // Gray
        background: '#ffffff',   // White
        backgroundAlt: '#f5f5f5',// Light gray
        success: '#43a047',      // Green
        warning: '#ff9800',      // Orange
        error: '#e53935',        // Red
        border: '#e0e0e0'        // Light gray border
    };

    // Font stack
    const FONTS = "'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif";

    // Apply base styles
    const baseStyles = `
        /* Import Google Fonts */
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');
        @import url('https://fonts.googleapis.com/icon?family=Material+Icons');
        
        /* Base resets */
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            font-family: ${FONTS};
            transition: all 0.2s ease-in-out;
        }
        
        body {
            color: ${THEME.text};
            background-color: ${THEME.backgroundAlt};
            font-size: 16px;
            line-height: 1.5;
            overflow-x: hidden;
        }
        
        /* Typography */
        h1, h2, h3, h4, h5, h6 {
            font-weight: 500;
            margin-bottom: 0.5em;
            color: ${THEME.primary};
        }
        
        h1 { font-size: 2.5rem; line-height: 1.2; }
        h2 { font-size: 2rem; line-height: 1.25; }
        h3 { font-size: 1.75rem; line-height: 1.3; }
        h4 { font-size: 1.5rem; line-height: 1.35; }
        h5 { font-size: 1.25rem; line-height: 1.4; }
        h6 { font-size: 1rem; line-height: 1.45; }
        
        p, li, td, th, label, input, select, textarea {
            font-size: 1rem;
            margin-bottom: 1em;
        }
        
        a {
            color: ${THEME.accent};
            text-decoration: none;
            font-weight: 500;
            transition: color 0.2s ease-in-out;
        }
        
        a:hover {
            color: ${THEME.secondary};
            text-decoration: underline;
        }
        
        /* Layout - Container */
        .container, .container-fluid, div[class^="container"] {
            width: 100%;
            padding-right: 1rem;
            padding-left: 1rem;
            margin-right: auto;
            margin-left: auto;
            max-width: 1200px;
        }
        
        /* Cards */
        .card, div[class*="card"], div[class*="panel"], div[class*="box"] {
            background-color: ${THEME.background} !important;
            border-radius: 8px !important;
            box-shadow: 0 2px 10px rgba(0,0,0,0.08) !important;
            margin-bottom: 1.5rem !important;
            overflow: hidden !important;
            border: none !important;
            transition: transform 0.3s, box-shadow 0.3s !important;
        }
        
        .card:hover, div[class*="card"]:hover, div[class*="panel"]:hover, div[class*="box"]:hover {
            transform: translateY(-4px) !important;
            box-shadow: 0 8px 16px rgba(0,0,0,0.1) !important;
        }
        
        .card-header, div[class*="card-header"], div[class*="panel-heading"], div[class*="box-header"] {
            background-color: ${THEME.background} !important;
            padding: 1rem !important;
            border-bottom: 1px solid ${THEME.border} !important;
            font-weight: 500 !important;
        }
        
        .card-body, div[class*="card-body"], div[class*="panel-body"], div[class*="box-body"] {
            padding: 1.25rem !important;
        }
        
        /* Buttons */
        button, .btn, input[type="button"], input[type="submit"], input[type="reset"],
        [class*="btn"], a[role="button"] {
            display: inline-flex !important;
            align-items: center !important;
            justify-content: center !important;
            padding: 0.5rem 1.25rem !important;
            font-weight: 500 !important;
            line-height: 1.5 !important;
            text-align: center !important;
            white-space: nowrap !important;
            vertical-align: middle !important;
            user-select: none !important;
            border: 1px solid transparent !important;
            font-size: 0.9375rem !important;
            border-radius: 4px !important;
            transition: all 0.2s ease-in-out !important;
            cursor: pointer !important;
            text-decoration: none !important;
            letter-spacing: 0.01em !important;
            background-color: ${THEME.primary} !important;
            color: white !important;
            box-shadow: 0 2px 5px rgba(0,0,0,0.15) !important;
            position: relative !important;
            overflow: hidden !important;
        }
        
        button:hover, .btn:hover, input[type="button"]:hover, input[type="submit"]:hover, input[type="reset"]:hover,
        [class*="btn"]:hover, a[role="button"]:hover {
            background-color: ${THEME.secondary} !important;
            box-shadow: 0 4px 8px rgba(0,0,0,0.2) !important;
            transform: translateY(-2px) !important;
        }
        
        button:active, .btn:active, input[type="button"]:active, input[type="submit"]:active, input[type="reset"]:active,
        [class*="btn"]:active, a[role="button"]:active {
            transform: translateY(1px) !important;
            box-shadow: 0 2px 3px rgba(0,0,0,0.1) !important;
        }
        
        /* Button Ripple Effect */
        button:after, .btn:after, input[type="button"]:after, input[type="submit"]:after, input[type="reset"]:after,
        [class*="btn"]:after, a[role="button"]:after {
            content: "";
            position: absolute;
            top: 50%;
            left: 50%;
            width: 5px;
            height: 5px;
            background: rgba(255, 255, 255, 0.5);
            opacity: 0;
            border-radius: 100%;
            transform: scale(1, 1) translate(-50%, -50%);
            transform-origin: 50% 50%;
        }
        
        /* Forms */
        input:not([type="button"]):not([type="submit"]):not([type="reset"]), 
        textarea, 
        select {
            width: 100%;
            padding: 0.75rem 1rem;
            font-size: 1rem;
            line-height: 1.5;
            color: ${THEME.text};
            background-color: ${THEME.background};
            background-clip: padding-box;
            border: 1px solid ${THEME.border};
            border-radius: 4px;
            transition: border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
            margin-bottom: 1rem;
        }
        
        input:not([type="button"]):not([type="submit"]):not([type="reset"]):focus, 
        textarea:focus, 
        select:focus {
            border-color: ${THEME.accent};
            outline: 0;
            box-shadow: 0 0 0 0.2rem rgba(33, 150, 243, 0.25);
        }
        
        label {
            display: inline-block;
            margin-bottom: 0.5rem;
            font-weight: 500;
            color: ${THEME.textLight};
        }
        
        /* Tables */
        table {
            width: 100%;
            margin-bottom: 1rem;
            border-collapse: separate;
            border-spacing: 0;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 2px 10px rgba(0,0,0,0.05);
        }
        
        th, td {
            padding: 0.75rem;
            vertical-align: middle;
            border-top: 1px solid ${THEME.border};
            text-align: left;
        }
        
        thead th {
            background-color: ${THEME.primary};
            color: white;
            border-bottom: 2px solid ${THEME.secondary};
            font-weight: 500;
            letter-spacing: 0.02em;
        }
        
        tbody tr {
            transition: background-color 0.2s ease;
        }
        
        tbody tr:nth-of-type(odd) {
            background-color: rgba(0,0,0,0.02);
        }
        
        tbody tr:hover {
            background-color: rgba(0,0,0,0.04);
        }
        
        /* Navigation */
        nav, [class*="navbar"], [class*="navigation"], header {
            background-color: ${THEME.primary} !important;
            padding: 0.75rem 1.5rem !important;
            display: flex !important;
            align-items: center !important;
            justify-content: space-between !important;
            color: white !important;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1) !important;
            position: relative !important;
            z-index: 1000 !important;
        }
        
        nav a, [class*="navbar"] a, [class*="navigation"] a, header a {
            color: white !important;
            padding: 0.5rem 1rem !important;
            text-decoration: none !important;
            font-weight: 500 !important;
            position: relative !important;
            transition: all 0.2s ease !important;
            opacity: 0.9 !important;
        }
        
        nav a:hover, [class*="navbar"] a:hover, [class*="navigation"] a:hover, header a:hover {
            opacity: 1 !important;
            transform: translateY(-2px) !important;
        }
        
        nav a:after, [class*="navbar"] a:after, [class*="navigation"] a:after, header a:after {
            content: "";
            position: absolute;
            bottom: 0;
            left: 50%;
            width: 0;
            height: 2px;
            background: white;
            transition: all 0.3s ease;
            transform: translateX(-50%);
        }
        
        nav a:hover:after, [class*="navbar"] a:hover:after, [class*="navigation"] a:hover:after, header a:hover:after {
            width: 80%;
        }
        
        /* Breadcrumb */
        .breadcrumb, [class*="breadcrumb"] {
            display: flex !important;
            flex-wrap: wrap !important;
            padding: 0.75rem 1rem !important;
            margin-bottom: 1rem !important;
            list-style: none !important;
            background-color: ${THEME.backgroundAlt} !important;
            border-radius: 4px !important;
        }
        
        .breadcrumb-item, .breadcrumb li {
            padding: 0 0.5rem !important;
            position: relative !important;
        }
        
        .breadcrumb-item + .breadcrumb-item::before,
        .breadcrumb li + li::before {
            display: inline-block !important;
            padding-right: 0.5rem !important;
            color: ${THEME.textLight} !important;
            content: "/" !important;
        }
        
        /* Alerts */
        .alert, [class*="alert"], [class*="message"] {
            position: relative !important;
            padding: 1rem 1.5rem !important;
            margin-bottom: 1rem !important;
            border: 1px solid transparent !important;
            border-radius: 4px !important;
            font-weight: 400 !important;
            background-color: ${THEME.backgroundAlt} !important;
            border-left: 5px solid ${THEME.primary} !important;
            box-shadow: 0 2px 5px rgba(0,0,0,0.05) !important;
        }
        
        /* Badges */
        .badge, [class*="badge"], [class*="tag"] {
            display: inline-flex !important;
            align-items: center !important;
            justify-content: center !important;
            padding: 0.25em 0.6em !important;
            font-size: 80% !important;
            font-weight: 500 !important;
            line-height: 1 !important;
            text-align: center !important;
            white-space: nowrap !important;
            vertical-align: baseline !important;
            border-radius: 100px !important;
            background-color: ${THEME.accent} !important;
            color: white !important;
            margin-left: 0.2em !important;
            margin-right: 0.2em !important;
        }
        
        /* Pagination */
        .pagination, [class*="pagination"] {
            display: flex !important;
            padding-left: 0 !important;
            list-style: none !important;
            border-radius: 0.25rem !important;
            justify-content: center !important;
        }
        
        .pagination li, [class*="pagination"] li {
            margin: 0 0.2rem !important;
        }
        
        .pagination a, [class*="pagination"] a {
            position: relative !important;
            display: inline-flex !important;
            align-items: center !important;
            justify-content: center !important;
            padding: 0.5rem 0.75rem !important;
            margin-left: -1px !important;
            line-height: 1.25 !important;
            color: ${THEME.primary} !important;
            background-color: ${THEME.background} !important;
            border: 1px solid ${THEME.border} !important;
            min-width: 2.5rem !important;
            border-radius: 4px !important;
            transition: all 0.2s ease-in-out !important;
        }
        
        .pagination a:hover, [class*="pagination"] a:hover {
            z-index: 2 !important;
            color: ${THEME.accent} !important;
            text-decoration: none !important;
            background-color: ${THEME.backgroundAlt} !important;
            border-color: ${THEME.border} !important;
        }
        
        .pagination a:focus, [class*="pagination"] a:focus {
            z-index: 3 !important;
            outline: 0 !important;
            box-shadow: 0 0 0 0.2rem rgba(33, 150, 243, 0.25) !important;
        }
        
        .pagination .active a, [class*="pagination"] .active a,
        .pagination .active span, [class*="pagination"] .active span {
            z-index: 3 !important;
            color: #fff !important;
            background-color: ${THEME.primary} !important;
            border-color: ${THEME.primary} !important;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1) !important;
        }
        
        /* Spacing utilities */
        .mt-1 { margin-top: 0.25rem !important; }
        .mb-1 { margin-bottom: 0.25rem !important; }
        .ml-1 { margin-left: 0.25rem !important; }
        .mr-1 { margin-right: 0.25rem !important; }
        .mx-1 { margin-left: 0.25rem !important; margin-right: 0.25rem !important; }
        .my-1 { margin-top: 0.25rem !important; margin-bottom: 0.25rem !important; }
        .m-1 { margin: 0.25rem !important; }
        
        .mt-2 { margin-top: 0.5rem !important; }
        .mb-2 { margin-bottom: 0.5rem !important; }
        .ml-2 { margin-left: 0.5rem !important; }
        .mr-2 { margin-right: 0.5rem !important; }
        .mx-2 { margin-left: 0.5rem !important; margin-right: 0.5rem !important; }
        .my-2 { margin-top: 0.5rem !important; margin-bottom: 0.5rem !important; }
        .m-2 { margin: 0.5rem !important; }
        
        .mt-3 { margin-top: 1rem !important; }
        .mb-3 { margin-bottom: 1rem !important; }
        .ml-3 { margin-left: 1rem !important; }
        .mr-3 { margin-right: 1rem !important; }
        .mx-3 { margin-left: 1rem !important; margin-right: 1rem !important; }
        .my-3 { margin-top: 1rem !important; margin-bottom: 1rem !important; }
        .m-3 { margin: 1rem !important; }
        
        .mt-4 { margin-top: 1.5rem !important; }
        .mb-4 { margin-bottom: 1.5rem !important; }
        .ml-4 { margin-left: 1.5rem !important; }
        .mr-4 { margin-right: 1.5rem !important; }
        .mx-4 { margin-left: 1.5rem !important; margin-right: 1.5rem !important; }
        .my-4 { margin-top: 1.5rem !important; margin-bottom: 1.5rem !important; }
        .m-4 { margin: 1.5rem !important; }
        
        .mt-5 { margin-top: 3rem !important; }
        .mb-5 { margin-bottom: 3rem !important; }
        .ml-5 { margin-left: 3rem !important; }
        .mr-5 { margin-right: 3rem !important; }
        .mx-5 { margin-left: 3rem !important; margin-right: 3rem !important; }
        .my-5 { margin-top: 3rem !important; margin-bottom: 3rem !important; }
        .m-5 { margin: 3rem !important; }
        
        .pt-1 { padding-top: 0.25rem !important; }
        .pb-1 { padding-bottom: 0.25rem !important; }
        .pl-1 { padding-left: 0.25rem !important; }
        .pr-1 { padding-right: 0.25rem !important; }
        .px-1 { padding-left: 0.25rem !important; padding-right: 0.25rem !important; }
        .py-1 { padding-top: 0.25rem !important; padding-bottom: 0.25rem !important; }
        .p-1 { padding: 0.25rem !important; }
        
        .pt-2 { padding-top: 0.5rem !important; }
        .pb-2 { padding-bottom: 0.5rem !important; }
        .pl-2 { padding-left: 0.5rem !important; }
        .pr-2 { padding-right: 0.5rem !important; }
        .px-2 { padding-left: 0.5rem !important; padding-right: 0.5rem !important; }
        .py-2 { padding-top: 0.5rem !important; padding-bottom: 0.5rem !important; }
        .p-2 { padding: 0.5rem !important; }
        
        .pt-3 { padding-top: 1rem !important; }
        .pb-3 { padding-bottom: 1rem !important; }
        .pl-3 { padding-left: 1rem !important; }
        .pr-3 { padding-right: 1rem !important; }
        .px-3 { padding-left: 1rem !important; padding-right: 1rem !important; }
        .py-3 { padding-top: 1rem !important; padding-bottom: 1rem !important; }
        .p-3 { padding: 1rem !important; }
        
        .pt-4 { padding-top: 1.5rem !important; }
        .pb-4 { padding-bottom: 1.5rem !important; }
        .pl-4 { padding-left: 1.5rem !important; }
        .pr-4 { padding-right: 1.5rem !important; }
        .px-4 { padding-left: 1.5rem !important; padding-right: 1.5rem !important; }
        .py-4 { padding-top: 1.5rem !important; padding-bottom: 1.5rem !important; }
        .p-4 { padding: 1.5rem !important; }
        
        .pt-5 { padding-top: 3rem !important; }
        .pb-5 { padding-bottom: 3rem !important; }
        .pl-5 { padding-left: 3rem !important; }
        .pr-5 { padding-right: 3rem !important; }
        .px-5 { padding-left: 3rem !important; padding-right: 3rem !important; }
        .py-5 { padding-top: 3rem !important; padding-bottom: 3rem !important; }
        .p-5 { padding: 3rem !important; }
        
        /* Modal/Dialog */
        .modal, [class*="modal"], [class*="dialog"] {
            position: fixed !important;
            top: 0 !important;
            left: 0 !important;
            width: 100% !important;
            height: 100% !important;
            background-color: rgba(0,0,0,0.5) !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            z-index: 1050 !important;
        }
        
        .modal-content, [class*="modal-content"], [class*="dialog-content"] {
            background-color: white !important;
            border-radius: 8px !important;
            box-shadow: 0 10px 25px rgba(0,0,0,0.2) !important;
            width: 100% !important;
            max-width: 600px !important;
            animation: fadeInDown 0.3s ease-out !important;
            overflow: hidden !important;
        }
        
        .modal-header, [class*="modal-header"], [class*="dialog-header"] {
            padding: 1rem !important;
            border-bottom: 1px solid ${THEME.border} !important;
            display: flex !important;
            align-items: center !important;
            justify-content: space-between !important;
        }
        
        .modal-title, [class*="modal-title"], [class*="dialog-title"] {
            margin: 0 !important;
            font-size: 1.25rem !important;
        }
        
        .modal-body, [class*="modal-body"], [class*="dialog-body"] {
            padding: 1.5rem !important;
        }
        
        .modal-footer, [class*="modal-footer"], [class*="dialog-footer"] {
            padding: 1rem !important;
            border-top: 1px solid ${THEME.border} !important;
            display: flex !important;
            align-items: center !important;
            justify-content: flex-end !important;
        }
        
        /* Hover effects */
        a:not([class*="btn"]), button:not([class*="btn"]) {
            position: relative;
            overflow: hidden;
        }
        
        /* Transitions and Animations */
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        
        @keyframes fadeInDown {
            from {
                opacity: 0;
                transform: translateY(-20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        @keyframes pulse {
            0% {
                transform: scale(1);
            }
            50% {
                transform: scale(1.05);
            }
            100% {
                transform: scale(1);
            }
        }
        
        .fade-in {
            animation: fadeIn 0.3s ease-out;
        }
        
        .fade-in-down {
            animation: fadeInDown 0.4s ease-out;
        }
        
        .pulse {
            animation: pulse 2s infinite;
        }
        
        /* Responsive Grid */
        .grid, [class*="grid"], .row, [class*="row"] {
            display: flex !important;
            flex-wrap: wrap !important;
            margin-right: -15px !important;
            margin-left: -15px !important;
        }
        
        .col, [class*="col-"] {
            position: relative !important;
            width: 100% !important;
            padding-right: 15px !important;
            padding-left: 15px !important;
            flex-basis: 0 !important;
            flex-grow: 1 !important;
            max-width: 100% !important;
        }
        
        .col-auto {
            flex: 0 0 auto !important;
            width: auto !important;
            max-width: none !important;
        }
        
        .col-1 { flex: 0 0 8.333333% !important; max-width: 8.333333% !important; }
        .col-2 { flex: 0 0 16.666667% !important; max-width: 16.666667% !important; }
        .col-3 { flex: 0 0 25% !important; max-width: 25% !important; }
        .col-4 { flex: 0 0 33.333333% !important; max-width: 33.333333% !important; }
        .col-5 { flex: 0 0 41.666667% !important; max-width: 41.666667% !important; }
        .col-6 { flex: 0 0 50% !important; max-width: 50% !important; }
        .col-7 { flex: 0 0 58.333333% !important; max-width: 58.333333% !important; }
        .col-8 { flex: 0 0 66.666667% !important; max-width: 66.666667% !important; }
        .col-9 { flex: 0 0 75% !important; max-width: 75% !important; }
        .col-10 { flex: 0 0 83.333333% !important; max-width: 83.333333% !important; }
        .col-11 { flex: 0 0 91.666667% !important; max-width: 91.666667% !important; }
        .col-12 { flex: 0 0 100% !important; max-width: 100% !important; }
        
        /* Media Queries */
        @media (max-width: 576px) {
            .container {
                max-width: 100% !important;
            }
            
            .hidden-xs {
                display: none !important;
            }
            
            .col-xs-12 {
                flex: 0 0 100% !important;
                max-width: 100% !important;
            }
            
            .nav, .navbar {
                flex-direction: column !important;
            }
            
            