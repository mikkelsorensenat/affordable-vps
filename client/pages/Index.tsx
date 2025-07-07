import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle,
  Globe,
  Mail,
  Zap,
  Settings,
  Shield,
  Star,
  Server,
  Users,
  ShoppingCart,
  Code,
  MessageSquare,
  MapPin,
} from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-blue-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Server className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">CloudVPS</span>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700">
              Get Started
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-blue-100 text-blue-700 hover:bg-blue-200">
              Affordable VPS Hosting
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              The Power of Dedicated
              <span className="text-blue-600 block">Without the Price Tag</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Get isolated server resources, high performance, and full control
              at a fraction of the cost. Perfect for startups, developers,
              e-commerce stores, and growing businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4"
              >
                Start Your VPS Today
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-blue-200 text-blue-700 hover:bg-blue-50 text-lg px-8 py-4"
              >
                View Pricing
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  99.9%
                </div>
                <div className="text-gray-600">Uptime Guarantee</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  24/7
                </div>
                <div className="text-gray-600">Expert Support</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">60s</div>
                <div className="text-gray-600">Setup Time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  Global
                </div>
                <div className="text-gray-600">Data Centers</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Affordable VPS Hosting?
            </h2>
            <p className="text-xl text-gray-600">
              Experience premium features without the premium price
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-blue-100 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl">
                  🌐 Blazing-Fast Global Performance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-600">
                  Experience ultra-low latency across the U.S., Europe, and Asia
                  with our optimized VPS network.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-blue-100 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl">
                  📨 Built-in Email Support
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-600">
                  Port 25 is open—so you can send transactional emails,
                  newsletters, and system notifications without restrictions.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-blue-100 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl">
                  ⚡ Instant Server Setup
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-600">
                  Launch your VPS within minutes—no technical delays, no
                  downtime.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-blue-100 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Settings className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl">
                  🔧 Customizable Environment
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-600">
                  Choose your operating system, install your preferred software,
                  and configure your server just the way you need.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-blue-100 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl">
                  🛡️ Reliable Infrastructure
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-600">
                  Our enterprise-grade hardware and 99.9% uptime guarantee keep
                  your business online, always.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-blue-100 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl">✅ Scalable Solutions</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-600">
                  Straightforward pricing and scalable solutions designed for
                  growth.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Affordable VPS Hosting Plans & Pricing
            </h2>
            <p className="text-xl text-gray-600">
              Straightforward pricing. Scalable solutions. Designed for growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-7xl mx-auto">
            {/* Starter VPS */}
            <Card className="border-blue-200 hover:shadow-xl transition-all hover:scale-105">
              <CardHeader className="text-center">
                <CardTitle className="text-lg font-semibold">
                  Starter VPS
                </CardTitle>
                <div className="text-3xl font-bold text-blue-600 mt-2">
                  $12.50<span className="text-sm text-gray-500">/month</span>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-600 mb-6">
                  Great for personal projects, hobby websites, or testing new
                  ideas.
                </CardDescription>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Get Started
                </Button>
              </CardContent>
            </Card>

            {/* Value VPS */}
            <Card className="border-blue-200 hover:shadow-xl transition-all hover:scale-105">
              <CardHeader className="text-center">
                <CardTitle className="text-lg font-semibold">
                  Value VPS
                </CardTitle>
                <div className="text-3xl font-bold text-blue-600 mt-2">
                  $16.00<span className="text-sm text-gray-500">/month</span>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-600 mb-6">
                  Ideal for small businesses or freelancers launching their
                  first product.
                </CardDescription>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Get Started
                </Button>
              </CardContent>
            </Card>

            {/* Essential VPS - Popular */}
            <Card className="border-blue-500 hover:shadow-xl transition-all hover:scale-105 relative">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white">
                Most Popular
              </Badge>
              <CardHeader className="text-center">
                <CardTitle className="text-lg font-semibold">
                  Essential VPS
                </CardTitle>
                <div className="text-3xl font-bold text-blue-600 mt-2">
                  $34.00<span className="text-sm text-gray-500">/month</span>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-600 mb-6">
                  Perfect for growing e-commerce stores, blogs, and lightweight
                  apps.
                </CardDescription>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Get Started
                </Button>
              </CardContent>
            </Card>

            {/* Comfort VPS */}
            <Card className="border-blue-200 hover:shadow-xl transition-all hover:scale-105">
              <CardHeader className="text-center">
                <CardTitle className="text-lg font-semibold">
                  Comfort VPS
                </CardTitle>
                <div className="text-3xl font-bold text-blue-600 mt-2">
                  $54.00<span className="text-sm text-gray-500">/month</span>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-600 mb-6">
                  A strong choice for local business platforms and expanding
                  digital services.
                </CardDescription>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Get Started
                </Button>
              </CardContent>
            </Card>

            {/* Elite VPS */}
            <Card className="border-blue-200 hover:shadow-xl transition-all hover:scale-105">
              <CardHeader className="text-center">
                <CardTitle className="text-lg font-semibold">
                  Elite VPS
                </CardTitle>
                <div className="text-3xl font-bold text-blue-600 mt-2">
                  $60.00<span className="text-sm text-gray-500">/month</span>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-600 mb-6">
                  Built for agencies and high-traffic websites that demand
                  consistent performance.
                </CardDescription>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Get Started
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4"
            >
              👉 Start Your Affordable VPS Hosting Today
            </Button>
          </div>
        </div>
      </section>

      {/* Who Should Use Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Who Should Use Our Affordable VPS Hosting?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-blue-100 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShoppingCart className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl">
                  🛒 Online Shops & E-Commerce
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-600">
                  Boost page speed, improve checkout times, and reduce cart
                  abandonment.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-blue-100 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl">
                  🏢 Entrepreneurs & SMBs
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-600">
                  Host internal tools, client dashboards, and websites with
                  stability and ease.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-blue-100 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl">
                  👨‍💻 Developers & Designers
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-600">
                  Deploy client work or run development environments without
                  resource limitations.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-blue-100 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl">
                  📬 Email Marketing Services
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-600">
                  Deliver emails reliably with open ports and no deliverability
                  issues.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-blue-100 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl">
                  🌍 Remote Teams & Freelancers
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-600">
                  Work from anywhere with stable, secure, and scalable hosting
                  infrastructure.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-blue-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-500 fill-current"
                    />
                  ))}
                </div>
                <CardDescription className="text-gray-700 mb-4">
                  "We got all the benefits of a dedicated server at a fraction
                  of the price—this VPS hosting is fantastic!"
                </CardDescription>
                <div className="font-semibold text-gray-900">
                  — Sarah K., Atlanta
                </div>
              </CardContent>
            </Card>

            <Card className="border-blue-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-500 fill-current"
                    />
                  ))}
                </div>
                <CardDescription className="text-gray-700 mb-4">
                  "Email delivery is smooth, speed is top-notch, and support was
                  lightning-fast. Highly recommended."
                </CardDescription>
                <div className="font-semibold text-gray-900">
                  — James T., Manchester
                </div>
              </CardContent>
            </Card>

            <Card className="border-blue-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-500 fill-current"
                    />
                  ))}
                </div>
                <CardDescription className="text-gray-700 mb-4">
                  "Setting up our app was simple, and the price is unbeatable
                  for what you get."
                </CardDescription>
                <div className="font-semibold text-gray-900">
                  — Elena M., Vancouver
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust our affordable VPS
            hosting for their business success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4"
            >
              Start Your VPS Today
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-4"
            >
              Contact Sales
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Server className="h-6 w-6 text-blue-400" />
                <span className="text-lg font-bold text-white">CloudVPS</span>
              </div>
              <p className="text-gray-400">
                Affordable VPS hosting solutions for businesses of all sizes.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Products</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    VPS Hosting
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    Dedicated Servers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    Cloud Storage
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    24/7 Support
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 CloudVPS. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
