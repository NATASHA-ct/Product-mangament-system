<?php

abstract class Product {
    protected $sku;
    protected $name;
    protected $price;
    
    public function __construct($sku, $name, $price) {
        $this->sku = $sku;
        $this->name = $name;
        $this->price = $price;
    }

    public function getSku() {
        return $this->sku;
    }

    public function getName() {
        return $this->name;
    }

    public function getPrice() {
        return $this->price;
    }

    abstract public function getDetails();
}

class Dvd extends Product {
    protected $size;

    public function __construct($sku, $name, $price, $size) {
        parent::__construct($sku, $name, $price);
        $this->size = $size;
    }

    public function getSize() {
        return $this->size;
    }

    public function getDetails() {
        return "SKU: {$this->sku}, Name: {$this->name}, Price: {$this->price}, Size: {$this->size} MB";
    }
}

class Book extends Product {
    protected $weight;

    public function __construct($sku, $name, $price, $weight) {
        parent::__construct($sku, $name, $price);
        $this->weight = $weight;
    }

    public function getWeight() {
        return $this->weight;
    }

    public function getDetails() {
        return "SKU: {$this->sku}, Name: {$this->name}, Price: {$this->price}, Weight: {$this->weight} Kg";
    }
}

class Furniture extends Product {
    protected $height;
    protected $width;
    protected $length;

    public function __construct($sku, $name, $price, $height, $width, $length) {
        parent::__construct($sku, $name, $price);
        $this->height = $height;
        $this->width = $width;
        $this->length = $length;
    }

    public function getHeight() {
        return $this->height;
    }

    public function getWidth() {
        return $this->width;
    }

    public function getLength() {
        return $this->length;
    }

    public function getDetails() {
        return "SKU: {$this->sku}, Name: {$this->name}, Price: {$this->price}, Dimensions: {$this->height} x {$this->width} x {$this->length} cm";
    }
}

class Inventory {
    protected $products;

    public function __construct() {
        $this->products = array();
    }

    public function addProduct(Product $product) {
        $this->products[] = $product;
    }

    public function getProducts() {
        return $this->products;
    }
}

// example usage:
$dvd = new Dvd('DVD001', 'The Matrix', 10.99, 700);
$book = new Book('BOOK001', 'The Hitchhiker\'s Guide to the Galaxy', 7.99, 0.5);
$furniture = new Furniture('FURN001', 'Office Chair', 59.99, 90, 60, 60);

$inventory = new Inventory();
$inventory->addProduct($dvd);
$inventory->addProduct($book);
$inventory->addProduct($furniture);

foreach ($inventory->getProducts() as $product) {
    echo $product->getDetails() . "\n";
}
?>