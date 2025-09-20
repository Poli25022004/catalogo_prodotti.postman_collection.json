{
  "info": {
    "name": "Catalogo Prodotti",
    "_postman_id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
    "description": "Collezione Postman per testare CRUD su DummyJSON (products).",
    "schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
  },
  "item": [
    {
      "name": "GET - Tutti i prodotti",
      "request": {
        "method": "GET",
        "header": [],
        "url": {
          "raw": "https://dummyjson.com/products",
          "protocol": "https",
          "host": [
            "dummyjson",
            "com"
          ],
          "path": [
            "products"
          ]
        }
      }
    },
    {
      "name": "GET - Cerca prodotti (iphone)",
      "request": {
        "method": "GET",
        "header": [],
        "url": {
          "raw": "https://dummyjson.com/products/search?q=iphone",
          "protocol": "https",
          "host": [
            "dummyjson",
            "com"
          ],
          "path": [
            "products",
            "search"
          ],
          "query": [
            {
              "key": "q",
              "value": "iphone"
            }
          ]
        }
      }
    },
    {
      "name": "POST - Aggiungi prodotto",
      "request": {
        "method": "POST",
        "header": [
          {
            "key": "Content-Type",
            "value": "application/json"
          }
        ],
        "body": {
          "mode": "raw",
          "raw": "{\n  \"title\": \"Laptop SuperTest\",\n  \"description\": \"Un laptop fittizio aggiunto via API\",\n  \"price\": 1200\n}"
        },
        "url": {
          "raw": "https://dummyjson.com/products/add",
          "protocol": "https",
          "host": [
            "dummyjson",
            "com"
          ],
          "path": [
            "products",
            "add"
          ]
        }
      }
    },
    {
      "name": "PUT - Aggiorna prodotto (id=1)",
      "request": {
        "method": "PUT",
        "header": [
          {
            "key": "Content-Type",
            "value": "application/json"
          }
        ],
        "body": {
          "mode": "raw",
          "raw": "{\n  \"price\": 999\n}"
        },
        "url": {
          "raw": "https://dummyjson.com/products/1",
          "protocol": "https",
          "host": [
            "dummyjson",
            "com"
          ],
          "path": [
            "products",
            "1"
          ]
        }
      }
    },
    {
      "name": "DELETE - Elimina prodotto (id=1)",
      "request": {
        "method": "DELETE",
        "header": [],
        "url": {
          "raw": "https://dummyjson.com/products/1",
          "protocol": "https",
          "host": [
            "dummyjson",
            "com"
          ],
          "path": [
            "products",
            "1"
          ]
        }
      }
    }
  ]
}
