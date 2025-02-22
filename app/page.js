"use client";

import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Book, BookCheck, BookOpenCheck , Package, Search, ShoppingCart } from "lucide-react";

const BookMarketplace = () => {
  const [books, setBooks] = useState([
    {
      id: 1,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      condition: "Good",
      price: 8.99,
      seller: "bookworm123",
      description: "Minor wear on corners, no markings inside",
      isBundle: false,
    },
    {
      id: 2,
      title: "Classic Literature Bundle",
      author: "Various Authors",
      condition: "Very Good",
      price: 24.99,
      seller: "librarykeeper",
      description: "Bundle of 4 classic novels in excellent condition",
      isBundle: true,
      bundleItems: [
        "Pride and Prejudice",
        "Jane Eyre",
        "Wuthering Heights",
        "Little Women",
      ],
    },
  ]);

  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("all"); // "all", "single", "bundles"

  const filteredBooks = books.filter((book) => {
    const matchesSearch = 
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = 
      filter === "all" ||
      (filter === "bundles" && book.isBundle) ||
      (filter === "single" && !book.isBundle);
    return matchesSearch && matchesFilter;
  });

  const calculateFee = (price) => {
    // 5% platform fee
    return (price * 0.05).toFixed(2);
  };

  const handlePurchase = (book) => {
    // Placeholder purchase function
    console.log(`Purchasing ${book.title}`);
    alert(`Purchasing ${book.title} for $${book.price} + $${calculateFEe(book.price)} fee`);
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Lynn's Used Books</h1>

        <div className="flex gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-3 text-gray-400" size={20} />
          </div>
        </div>
      </div>
    </div>
  )
}