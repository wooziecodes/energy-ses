<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ENERGY-SES: Introduction</title>
    <link rel="stylesheet" href="css/template.css">
    <style>
        .alert-banner {
            background: linear-gradient(135deg, #ff4444 0%, #ff0000 100%);
            color: white;
            padding: 2rem;
            border-radius: 8px;
            margin: 2rem 0;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        }

        .stat-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
            margin: 2rem 0;
        }

        .stat-card {
            background: white;
            padding: 2rem;
            border-radius: 8px;
            text-align: center;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
            transition: transform 0.3s ease;
        }

        .stat-card:hover {
            transform: translateY(-5px);
        }

        .stat-number {
            font-size: 2.5rem;
            font-weight: bold;
            color: #ff4444;
            margin-bottom: 1rem;
        }

        .quote-box {
            background: #f8f9fa;
            border-left: 5px solid #ff4444;
            padding: 2rem;
            margin: 2rem 0;
            font-style: italic;
        }

        .regional-impact {
            background: #fff8f8;
            padding: 2rem;
            border-radius: 8px;
            margin: 2rem 0;
        }

        .regional-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 1rem;
            margin-top: 1rem;
        }

        .regional-card {
            background: white;
            padding: 1rem;
            border-radius: 4px;
            text-align: center;
        }
    </style>
</head>
<body>
    <!-- Header and nav remain the same -->

    <main>
        <div class="container">
            <div class="alert-banner">
                <h2>Energy Crisis: A National Emergency</h2>
                <p>"Energy prices remain significantly higher than pre-crisis levels, with household debt reaching record highs" - Ofgem 2024</p>
            </div>

            <div id="energy-dashboard"></div>

            <div class="stat-grid">
                <div class="stat-card">
                    <div class="stat-number">£3B</div>
                    <p>Total household energy debt in 2024</p>
                </div>
                <div class="stat-card">
                    <div class="stat-number">2.3M</div>
                    <p>Households in energy debt</p>
                </div>
                <div class="stat-card">
                    <div class="stat-number">67%</div>
                    <p>Increase in fuel poverty gap (2020-2023)</p>
                </div>
                <div class="stat-card">
                    <div class="stat-number">£1,761</div>
                    <p>Average arrears without repayment plan</p>
                </div>
            </div>

            <div class="quote-box">
                <p>"The aggregate fuel poverty gap in England increased by an estimated 67% between 2020 and 2023. While the extent of fuel poverty did not increase during the 'energy crisis', the depth of their fuel poverty did."</p>
                <small>- House of Commons Library, 2024</small>
            </div>

            <div class="regional-impact">
                <h3>Regional Crisis Hotspots</h3>
                <div class="regional-grid">
                    <div class="regional-card">
                        <h4>West Midlands</h4>
                        <p>19.6% in fuel poverty</p>
                    </div>
                    <div class="regional-card">
                        <h4>Stoke-on-Trent</h4>
                        <p>24.7% in fuel poverty</p>
                    </div>
                    <div class="regional-card">
                        <h4>Birmingham</h4>
                        <p>24.0% in fuel poverty</p>
                    </div>
                    <div class="regional-card">
                        <h4>Yorkshire & Humber</h4>
                        <p>17.0% in fuel poverty</p>
                    </div>
                </div>
            </div>

            <!-- Rest of the content -->
        </div>
    </main>

    <script type="module">
        import { renderEnergyDashboard } from './energy-charts.js';
        renderEnergyDashboard(document.getElementById('energy-dashboard'));
    </script>
</body>
</html>