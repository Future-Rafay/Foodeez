'use client';

import React from 'react';
import Logo from '@/components/ui/Logo';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Input from '@/components/ui/Input';
import SearchInput from '@/components/ui/SearchInput';
import FoodCard from '@/components/ui/FoodCard';
import RestaurantCard from '@/components/ui/RestaurantCard';

export default function UIShowcasePage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-secondary-900 mb-8">Foodeez UI Component Showcase</h1>
        
        {/* Logo Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-secondary-900 mb-4">Logo</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-white p-6 rounded-xl shadow-md">
            <div className="flex flex-col items-center">
              <Logo size="lg" />
              <p className="mt-2 text-sm text-secondary-600">Default Logo</p>
            </div>
            <div className="flex flex-col items-center bg-primary-500 p-4 rounded-lg">
              <Logo variant="white" size="lg" />
              <p className="mt-2 text-sm text-white">White Logo</p>
            </div>
            <div className="flex flex-col items-center">
              <Logo variant="dark" size="lg" withIcon={false} />
              <p className="mt-2 text-sm text-secondary-600">Text-only Logo</p>
            </div>
          </div>
        </section>
        
        {/* Button Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-secondary-900 mb-4">Buttons</h2>
          <Card className="p-6">
            <h3 className="text-lg font-bold text-secondary-900 mb-4">Button Variants</h3>
            <div className="flex flex-wrap gap-4 mb-8">
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="accent">Accent</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="outlineSecondary">Outline Secondary</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
              <Button variant="gradient">Gradient</Button>
            </div>
            
            <h3 className="text-lg font-bold text-secondary-900 mb-4">Button Sizes</h3>
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <Button variant="primary" size="xs">Extra Small</Button>
              <Button variant="primary" size="sm">Small</Button>
              <Button variant="primary" size="md">Medium</Button>
              <Button variant="primary" size="lg">Large</Button>
              <Button variant="primary" size="xl">Extra Large</Button>
            </div>
            
            <h3 className="text-lg font-bold text-secondary-900 mb-4">Button with Icons</h3>
            <div className="flex flex-wrap gap-4">
              <Button 
                variant="primary" 
                icon={
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                }
                iconPosition="left"
              >
                Search
              </Button>
              <Button 
                variant="secondary" 
                icon={
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                  </svg>
                }
                iconPosition="right"
              >
                Upload
              </Button>
              <Button 
                variant="outline" 
                icon={
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                }
                iconPosition="left"
              >
                Add New
              </Button>
            </div>
          </Card>
        </section>
        
        {/* Badge Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-secondary-900 mb-4">Badges</h2>
          <Card className="p-6">
            <h3 className="text-lg font-bold text-secondary-900 mb-4">Badge Variants</h3>
            <div className="flex flex-wrap gap-4 mb-8">
              <Badge variant="default">Default</Badge>
              <Badge variant="primary">Primary</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="accent">Accent</Badge>
              <Badge variant="success">Success</Badge>
              <Badge variant="warning">Warning</Badge>
              <Badge variant="error">Error</Badge>
              <Badge variant="outline">Outline</Badge>
              <Badge variant="outlinePrimary">Outline Primary</Badge>
            </div>
            
            <h3 className="text-lg font-bold text-secondary-900 mb-4">Badge Sizes</h3>
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <Badge variant="primary" size="xs">Extra Small</Badge>
              <Badge variant="primary" size="sm">Small</Badge>
              <Badge variant="primary" size="md">Medium</Badge>
              <Badge variant="primary" size="lg">Large</Badge>
            </div>
            
            <h3 className="text-lg font-bold text-secondary-900 mb-4">Badge with Icons</h3>
            <div className="flex flex-wrap gap-4">
              <Badge 
                variant="primary" 
                icon={
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                }
              >
                New
              </Badge>
              <Badge 
                variant="success" 
                icon={
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                }
              >
                Verified
              </Badge>
              <Badge 
                variant="warning" 
                icon={
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                }
              >
                Warning
              </Badge>
            </div>
          </Card>
        </section>
        
        {/* Input Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-secondary-900 mb-4">Inputs</h2>
          <Card className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-bold text-secondary-900 mb-4">Basic Input</h3>
                <Input 
                  label="Name" 
                  placeholder="Enter your name" 
                  helperText="This is a helper text"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-secondary-900 mb-4">Input with Error</h3>
                <Input 
                  label="Email" 
                  placeholder="Enter your email" 
                  error="Please enter a valid email address"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-secondary-900 mb-4">Input with Icon</h3>
                <Input 
                  label="Password" 
                  type="password" 
                  placeholder="Enter your password" 
                  leftIcon={
                    <svg className="w-5 h-5 text-secondary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  }
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-secondary-900 mb-4">Search Input</h3>
                <SearchInput 
                  placeholder="Search for restaurants, dishes, or cuisines..." 
                  onSearch={(value) => console.log('Searching for:', value)}
                />
              </div>
            </div>
          </Card>
        </section>
        
        {/* Card Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-secondary-900 mb-4">Cards</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card variant="default" shadow="md" rounded="xl" hover="lift" padding="md">
              <Card.Header>
                <Card.Title>Default Card</Card.Title>
                <Card.Description>This is a default card with medium shadow and hover lift effect.</Card.Description>
              </Card.Header>
              <Card.Content>
                <p className="text-secondary-600">Card content goes here. You can add any content you want.</p>
              </Card.Content>
              <Card.Footer>
                <Button variant="primary" size="sm">Action</Button>
              </Card.Footer>
            </Card>
            
            <Card variant="primary" shadow="lg" rounded="xl" hover="grow" padding="md">
              <Card.Header>
                <Card.Title>Primary Card</Card.Title>
                <Card.Description>This is a primary card with large shadow and hover grow effect.</Card.Description>
              </Card.Header>
              <Card.Content>
                <p className="text-secondary-600">Card content goes here. You can add any content you want.</p>
              </Card.Content>
              <Card.Footer>
                <Button variant="secondary" size="sm">Action</Button>
              </Card.Footer>
            </Card>
            
            <Card variant="beige" shadow="sm" rounded="xl" border="primary" hover="highlight" padding="md">
              <Card.Header>
                <Card.Title>Beige Card</Card.Title>
                <Card.Description>This is a beige card with small shadow and hover highlight effect.</Card.Description>
              </Card.Header>
              <Card.Content>
                <p className="text-secondary-600">Card content goes here. You can add any content you want.</p>
              </Card.Content>
              <Card.Footer>
                <Button variant="outline" size="sm">Action</Button>
              </Card.Footer>
            </Card>
          </div>
        </section>
        
        {/* Food Card Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-secondary-900 mb-4">Food Cards</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FoodCard 
              id={1}
              name="Margherita Pizza"
              image="https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
              price={12.99}
              rating={4.7}
              reviewCount={128}
              restaurant="Taste of Italy"
              restaurantId={1}
              categories={["Pizza", "Italian", "Vegetarian"]}
              isSpecial={true}
              href="/food/1"
            />
            
            <FoodCard 
              id={2}
              name="Chicken Tikka Masala"
              image="https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
              price={15.99}
              rating={4.5}
              reviewCount={96}
              restaurant="Spice Garden"
              restaurantId={2}
              categories={["Indian", "Curry", "Spicy"]}
              isSeasonal={true}
              href="/food/2"
            />
            
            <FoodCard 
              id={3}
              name="Sushi Platter"
              image="https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
              price={24.99}
              rating={4.9}
              reviewCount={203}
              restaurant="Sushi Master"
              restaurantId={3}
              categories={["Japanese", "Sushi", "Seafood"]}
              href="/food/3"
            />
          </div>
        </section>
        
        {/* Restaurant Card Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-secondary-900 mb-4">Restaurant Cards</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <RestaurantCard 
              id={1}
              name="Taste of Italy"
              image="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
              cuisine="Italian"
              location="Downtown"
              rating={4.8}
              reviewCount={243}
              distance="0.5 mi"
              priceLevel={2}
              isOpen={true}
              specialties={["Pizza", "Pasta", "Tiramisu"]}
              hasNfcMenu={true}
            />
            
            <RestaurantCard 
              id={2}
              name="Spice Garden"
              image="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              cuisine="Indian"
              location="Midtown"
              rating={4.6}
              reviewCount={187}
              distance="1.2 mi"
              priceLevel={3}
              isOpen={true}
              specialties={["Curry", "Tandoori", "Naan", "Biryani", "Samosa"]}
            />
            
            <RestaurantCard 
              id={3}
              name="Sushi Master"
              image="https://images.unsplash.com/photo-1579027989536-b7b1f875659b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              cuisine="Japanese"
              location="Riverside"
              rating={4.9}
              reviewCount={312}
              distance="2.5 mi"
              priceLevel={4}
              isOpen={false}
              specialties={["Sushi", "Ramen", "Tempura"]}
              hasNfcMenu={true}
            />
          </div>
        </section>
      </div>
    </div>
  );
} 