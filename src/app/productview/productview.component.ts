import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-productview',
  templateUrl: './productview.component.html',
  styleUrls: ['./productview.component.css']
})
export class ProductviewComponent implements OnInit {
  productForm: FormGroup;
  submitted = false;
  category: Array<string> = [
    "Laptop",
    "Mobile Phone",
    "HeadPhones",
    "Camera",
    "Watches",
    "T-shirt"
  ]
  subCategory = {
    laptop: [
      "Dell",
      "Lenovo",
      "Acer",
      "HP",
      "Asus",
      "Macbook"
    ],
    mobilephone: [
      "Apple",
      "Samsung",
      "One plus",
      "Oppo",
      "Redmi",
      "Sony"
    ],
    headphones: [
      "JBL",
      "Skull candy",
      "Boat",
      "Seinchier",
      "Sony",
      "Samsung"
    ],
    camera: [
      "Nikon",
      "Canon",
      "Sony"
    ],
    watches: [
      "Fossil",
      "Rolex",
      "Fastrack",
      "Casio",
      "Titan",
      "Sonata"
    ],
    tshirt: [
      "Round Neck",
      "V-neck",
      "Sleeve"
    ]

  }
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.productForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.min(2), Validators.max(20)]],
      price: ['', [Validators.required, Validators.min(200), Validators.max(2000)]],
      category: [
        this.category[0],
        Validators.required],
      subCategory: [this.subCategory.laptop[0], Validators.required],
      file: ['', Validators.required]
    },
    )
  }
  getSelectedCategory() {
    switch (this.productForm.controls['category'].value) {
      case 'Laptop': return 'laptop'
      case 'Mobile Phone': return 'mobilephone'
      case 'HeadPhones': return 'headphones'
      case 'Camera': return 'camera'
      case 'Watches': return 'watches'
      case 'T-shirt': return 'tshirt'
    }
  }

  get f() {
    return this.productForm.controls
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.productForm.invalid) {
      return;
    }

    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
    console.log(this.productForm.value)
  }
}