export default [
  {
    "id": 1,
    "dataWriters": [
      {
        "id": 1,
        "name": "gasPriceWriter"
      }
    ],
    "name": "gasPrice",
    "dataReaders": [
      {
        "id": 1,
        "name": "gasPriceReader1"
      },
      {
        "id": 2,
        "name": "gasPriceReader2"
      }
    ]
  },
  {
    "id": 2,
    "dataWriters": [
      {
        "id": 2,
        "name": "cornPriceWriter"
      }
    ],
    "name": "cornPrice",
    "dataReaders": [
      {
        "id": 3,
        "name": "cornPriceReader1"
      },
      {
        "id": 4,
        "name": "cornPriceReader2"
      }
    ]
  },
  {
    "id": 3,
    "dataWriters": [
      {
        "id": 3,
        "name": "wheatPriceWriter"
      }
    ],
    "name": "wheatPrice",
    "dataReaders": [
      {
        "id": 5,
        "name": "wheatPriceReader1"
      }
    ]
  }
]
