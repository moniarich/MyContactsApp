import { useEffect, useState } from "react";
import { Fragment } from "react/cjs/react.production.min";
import "./App.css";
import ContactDetails from "./ContactDetails";
import ContactList from "./ContactList";

import ContactListNavbar from "./ContactListNavbar";
import ContactListSearch from "./ContactListSearch";
import ContactNavbar from "./ContactNavbar";

const Api = {
  results: [
    {
      gender: "male",
      name: {
        title: "Mr",
        first: "Nathan",
        last: "Arnold",
      },
      location: {
        street: {
          number: 6247,
          name: "Stanley Road",
        },
        city: "Bangor",
        state: "Rutland",
        country: "United Kingdom",
        postcode: "YG7O 1PQ",
        coordinates: {
          latitude: "-51.2160",
          longitude: "-47.5983",
        },
        timezone: {
          offset: "+5:00",
          description: "Ekaterinburg, Islamabad, Karachi, Tashkent",
        },
      },
      email: "nathan.arnold@example.com",
      login: {
        uuid: "b0b9c0cd-19c1-44c0-b3e6-368f72fef5fd",
        username: "tinykoala307",
        password: "camp",
        salt: "hMVfqVbo",
        md5: "973e01960e00989772636d9f61cccec7",
        sha1: "c2616dcd87c206bc92bab149bc0539ad26042e31",
        sha256:
          "04ca5ff27a9dea53d76313b950f1a473d7d460ac58ee36692534aaf9f81a4925",
      },
      dob: {
        date: "1967-07-09T02:28:41.868Z",
        age: 55,
      },
      registered: {
        date: "2010-12-26T19:21:44.740Z",
        age: 12,
      },
      phone: "017683 24071",
      cell: "0707-499-292",
      id: {
        name: "NINO",
        value: "HW 41 56 03 E",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/95.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/95.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/95.jpg",
      },
      nat: "GB",
    },
    {
      gender: "male",
      name: {
        title: "Mr",
        first: "Jeff",
        last: "Barnes",
      },
      location: {
        street: {
          number: 6485,
          name: "Stanley Road",
        },
        city: "Cardiff",
        state: "Warwickshire",
        country: "United Kingdom",
        postcode: "M0 1FG",
        coordinates: {
          latitude: "64.9314",
          longitude: "-45.3710",
        },
        timezone: {
          offset: "+9:30",
          description: "Adelaide, Darwin",
        },
      },
      email: "jeff.barnes@example.com",
      login: {
        uuid: "e1e8dd33-a333-4312-a843-23e0a548a9ce",
        username: "smallleopard718",
        password: "goose",
        salt: "w4U21whM",
        md5: "ba4ff5f564db8fb6309e87433da0b285",
        sha1: "b4c937cc44019868fea1be9c3c150dfafbf3fe11",
        sha256:
          "d0967c2e27076ae8323d0986ef9231f7c23b0fdafe4220d487667ba941f7c366",
      },
      dob: {
        date: "1974-07-17T09:13:40.718Z",
        age: 48,
      },
      registered: {
        date: "2016-09-21T06:16:16.397Z",
        age: 6,
      },
      phone: "017687 70155",
      cell: "0703-004-910",
      id: {
        name: "NINO",
        value: "SG 10 28 96 U",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/43.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/43.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/43.jpg",
      },
      nat: "GB",
    },
    {
      gender: "male",
      name: {
        title: "Mr",
        first: "Kent",
        last: "Butler",
      },
      location: {
        street: {
          number: 7320,
          name: "Queensway",
        },
        city: "Leicester",
        state: "Dyfed",
        country: "United Kingdom",
        postcode: "G2 1DJ",
        coordinates: {
          latitude: "-26.2595",
          longitude: "62.5592",
        },
        timezone: {
          offset: "+11:00",
          description: "Magadan, Solomon Islands, New Caledonia",
        },
      },
      email: "kent.butler@example.com",
      login: {
        uuid: "ca0c5c5a-aaf7-40c7-bd1b-c905e189e572",
        username: "whitekoala185",
        password: "ring",
        salt: "96W1UOwt",
        md5: "b3aa7523e2d89c063d7ce6fc63887e00",
        sha1: "5a2625d45fcea8fbf0f173b18d7139a3212da85c",
        sha256:
          "8387c70dfb10b526d4ee546d3c75b8dc86286608b472aba01dd34b450adf5754",
      },
      dob: {
        date: "1966-12-19T04:13:48.642Z",
        age: 56,
      },
      registered: {
        date: "2019-08-23T00:29:05.415Z",
        age: 3,
      },
      phone: "017683 23749",
      cell: "0760-310-913",
      id: {
        name: "NINO",
        value: "PB 80 80 42 F",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/57.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/57.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/57.jpg",
      },
      nat: "GB",
    },
    {
      gender: "female",
      name: {
        title: "Miss",
        first: "Leah",
        last: "Kelly",
      },
      location: {
        street: {
          number: 5242,
          name: "Windsor Road",
        },
        city: "Oxford",
        state: "South Glamorgan",
        country: "United Kingdom",
        postcode: "L2 1PP",
        coordinates: {
          latitude: "31.1561",
          longitude: "114.8714",
        },
        timezone: {
          offset: "+1:00",
          description: "Brussels, Copenhagen, Madrid, Paris",
        },
      },
      email: "leah.kelly@example.com",
      login: {
        uuid: "abcc461c-296b-470b-a277-f525c1fc61d3",
        username: "ticklishrabbit422",
        password: "batman",
        salt: "GiigP49s",
        md5: "715ed0e68f8130d0bc69c97be2913e5a",
        sha1: "24344c5151db0c7d62cd691c6476f51c5f7176f7",
        sha256:
          "2ad6d53901eb8d77c18db30211a6a8608f49bf114dbd4deaa7df2e3411445a50",
      },
      dob: {
        date: "1947-05-04T05:36:39.106Z",
        age: 75,
      },
      registered: {
        date: "2015-06-05T11:50:56.604Z",
        age: 7,
      },
      phone: "017684 36058",
      cell: "0758-522-849",
      id: {
        name: "NINO",
        value: "HP 44 04 64 K",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/women/82.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/82.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/82.jpg",
      },
      nat: "GB",
    },
    {
      gender: "female",
      name: {
        title: "Miss",
        first: "Kaitlin",
        last: "Willis",
      },
      location: {
        street: {
          number: 7085,
          name: "Mill Road",
        },
        city: "Gloucester",
        state: "Merseyside",
        country: "United Kingdom",
        postcode: "P35 1ZN",
        coordinates: {
          latitude: "-29.2637",
          longitude: "44.9085",
        },
        timezone: {
          offset: "+2:00",
          description: "Kaliningrad, South Africa",
        },
      },
      email: "kaitlin.willis@example.com",
      login: {
        uuid: "b1b7fe4f-336c-4911-9bc7-ea65b530fa84",
        username: "yellowduck309",
        password: "bigbig",
        salt: "ZuLBOYWU",
        md5: "9f56ac02dce9bfdd7320b95f805e458c",
        sha1: "beafcebae10aa3322309d3dae095a50285ea96c2",
        sha256:
          "4806c1c7708cf55755aa99d6b9e371e88cb5276b09cdf1f0b257b7af03d96764",
      },
      dob: {
        date: "1957-12-18T05:44:42.563Z",
        age: 65,
      },
      registered: {
        date: "2018-03-15T07:49:22.427Z",
        age: 4,
      },
      phone: "017684 36781",
      cell: "0726-421-362",
      id: {
        name: "NINO",
        value: "XB 90 30 15 U",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/women/25.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/25.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/25.jpg",
      },
      nat: "GB",
    },
    {
      gender: "male",
      name: {
        title: "Mr",
        first: "Matthew",
        last: "Hopkins",
      },
      location: {
        street: {
          number: 5107,
          name: "Oaks Cross",
        },
        city: "Aberdeen",
        state: "Lothian",
        country: "United Kingdom",
        postcode: "C8E 0PQ",
        coordinates: {
          latitude: "-11.7100",
          longitude: "-130.6995",
        },
        timezone: {
          offset: "-8:00",
          description: "Pacific Time (US & Canada)",
        },
      },
      email: "matthew.hopkins@example.com",
      login: {
        uuid: "f4c82894-4a21-42a4-9738-a1532570eac2",
        username: "beautifulleopard255",
        password: "charlton",
        salt: "kFfBqGhB",
        md5: "085cf41188a1ad83d993f86adeffa3f9",
        sha1: "acd83389d63c1e02a6682d749516a5940bb6120c",
        sha256:
          "66872c99e5f3645249e278ca3d0eaefe2e2e210ab936022c8636ce3cee542a2c",
      },
      dob: {
        date: "1961-03-30T12:48:42.150Z",
        age: 61,
      },
      registered: {
        date: "2003-10-19T09:54:58.043Z",
        age: 19,
      },
      phone: "016973 17098",
      cell: "0728-635-880",
      id: {
        name: "NINO",
        value: "TB 52 07 36 Z",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/57.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/57.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/57.jpg",
      },
      nat: "GB",
    },
    {
      gender: "female",
      name: {
        title: "Mrs",
        first: "Emily",
        last: "Evans",
      },
      location: {
        street: {
          number: 4405,
          name: "Green Lane",
        },
        city: "Sheffield",
        state: "West Midlands",
        country: "United Kingdom",
        postcode: "E29 4PE",
        coordinates: {
          latitude: "74.3121",
          longitude: "-6.1646",
        },
        timezone: {
          offset: "+3:00",
          description: "Baghdad, Riyadh, Moscow, St. Petersburg",
        },
      },
      email: "emily.evans@example.com",
      login: {
        uuid: "5ebdd519-6c8a-48d7-88bc-82d3547709c6",
        username: "ticklishpanda187",
        password: "thanatos",
        salt: "dlODdZzc",
        md5: "95aab54b04ed2c0a896074d16737115a",
        sha1: "fcd78ac91a8296f4a2b956002004aa56e4eb1555",
        sha256:
          "9db197b7e6bf0a6ae2900c7124f13c573fc3c40672c0a90ad7ad655326ab41ac",
      },
      dob: {
        date: "1987-04-20T22:18:04.360Z",
        age: 35,
      },
      registered: {
        date: "2019-02-08T20:21:20.633Z",
        age: 3,
      },
      phone: "016973 39613",
      cell: "0755-259-655",
      id: {
        name: "NINO",
        value: "JZ 55 53 89 N",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/women/90.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/90.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/90.jpg",
      },
      nat: "GB",
    },
    {
      gender: "male",
      name: {
        title: "Mr",
        first: "Marc",
        last: "Grant",
      },
      location: {
        street: {
          number: 7943,
          name: "The Green",
        },
        city: "Leeds",
        state: "Lancashire",
        country: "United Kingdom",
        postcode: "IN51 1YP",
        coordinates: {
          latitude: "-77.7719",
          longitude: "128.5109",
        },
        timezone: {
          offset: "+1:00",
          description: "Brussels, Copenhagen, Madrid, Paris",
        },
      },
      email: "marc.grant@example.com",
      login: {
        uuid: "1a6518a1-a56e-4535-8cfc-ae4c3a3c9a7b",
        username: "tinymeercat459",
        password: "flyer",
        salt: "Mm2EuKxz",
        md5: "b6006361e39aa5fa00ced6738347e9f5",
        sha1: "71abccebd35f93e95096fa75e7957771af9c5857",
        sha256:
          "9c312b6fc0fedbe7b7f3166167823c6da0e198b12cab64c6a9da417b542bef6d",
      },
      dob: {
        date: "1991-04-25T13:04:32.366Z",
        age: 31,
      },
      registered: {
        date: "2014-09-01T15:27:04.253Z",
        age: 8,
      },
      phone: "016973 01284",
      cell: "0737-231-587",
      id: {
        name: "NINO",
        value: "AB 16 16 69 H",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/34.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/34.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/34.jpg",
      },
      nat: "GB",
    },
    {
      gender: "female",
      name: {
        title: "Miss",
        first: "Sam",
        last: "Burns",
      },
      location: {
        street: {
          number: 6357,
          name: "London Road",
        },
        city: "Inverness",
        state: "North Yorkshire",
        country: "United Kingdom",
        postcode: "W85 6GR",
        coordinates: {
          latitude: "-59.9037",
          longitude: "172.9355",
        },
        timezone: {
          offset: "-10:00",
          description: "Hawaii",
        },
      },
      email: "sam.burns@example.com",
      login: {
        uuid: "4d4fb449-aedc-43fe-83d5-c8c9fcd709e0",
        username: "angrykoala845",
        password: "snoopy",
        salt: "eNjSsv8M",
        md5: "84024f654c2399655d0dee3eb2250368",
        sha1: "60b6412f3ca1be988a080f4e4fe34967d0335cf4",
        sha256:
          "82755fee57c41fc272f2355761c3a150c949d3a19b5bc75d709eeb98d5716fde",
      },
      dob: {
        date: "1975-11-04T20:16:10.310Z",
        age: 47,
      },
      registered: {
        date: "2005-10-27T05:12:52.145Z",
        age: 17,
      },
      phone: "016977 38727",
      cell: "0792-221-121",
      id: {
        name: "NINO",
        value: "XK 36 53 75 I",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/women/68.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/68.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/68.jpg",
      },
      nat: "GB",
    },
    {
      gender: "male",
      name: {
        title: "Mr",
        first: "Charles",
        last: "Fields",
      },
      location: {
        street: {
          number: 8806,
          name: "Highfield Road",
        },
        city: "York",
        state: "Tyne and Wear",
        country: "United Kingdom",
        postcode: "F0Z 6GN",
        coordinates: {
          latitude: "23.3359",
          longitude: "171.2998",
        },
        timezone: {
          offset: "+4:00",
          description: "Abu Dhabi, Muscat, Baku, Tbilisi",
        },
      },
      email: "charles.fields@example.com",
      login: {
        uuid: "532bcfb1-2984-42e2-8dea-6e5000e14016",
        username: "beautifulpeacock454",
        password: "asdf",
        salt: "M7Tk1trd",
        md5: "00b07c25e15057dfd7e54a1cd331c56e",
        sha1: "fd16dff4752bd0590a9409fbb227468ef88e4369",
        sha256:
          "2c4ba9757492bcd20e4f1786739def388d729a838e6c5116f28aa2222a2eefe1",
      },
      dob: {
        date: "1990-08-14T19:35:17.424Z",
        age: 32,
      },
      registered: {
        date: "2006-12-03T22:31:26.537Z",
        age: 16,
      },
      phone: "01328 79704",
      cell: "0713-857-120",
      id: {
        name: "NINO",
        value: "BS 22 72 85 D",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/51.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/51.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/51.jpg",
      },
      nat: "GB",
    },
    {
      gender: "female",
      name: {
        title: "Miss",
        first: "Mia",
        last: "Patterson",
      },
      location: {
        street: {
          number: 6061,
          name: "Manchester Road",
        },
        city: "St Davids",
        state: "Shropshire",
        country: "United Kingdom",
        postcode: "NE3F 6BS",
        coordinates: {
          latitude: "85.0105",
          longitude: "-117.5440",
        },
        timezone: {
          offset: "+5:30",
          description: "Bombay, Calcutta, Madras, New Delhi",
        },
      },
      email: "mia.patterson@example.com",
      login: {
        uuid: "0712343a-7a9b-4de0-b8c9-44208286f4a1",
        username: "purplerabbit705",
        password: "282828",
        salt: "XMlFaxAq",
        md5: "bd790da24298a0ca4d9f9ef8c885ebc7",
        sha1: "8c5c5f4125afd59c2981d93654e6b28e7c5f7601",
        sha256:
          "945d908654fff284c20cd41bc4ea54bde79a8a8d6bcf022d1bc33e6a5276d72e",
      },
      dob: {
        date: "1963-02-20T03:36:59.928Z",
        age: 59,
      },
      registered: {
        date: "2003-01-07T13:01:49.459Z",
        age: 19,
      },
      phone: "020 8033 9732",
      cell: "0707-083-304",
      id: {
        name: "NINO",
        value: "AL 34 07 58 U",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/women/94.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/94.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/94.jpg",
      },
      nat: "GB",
    },
    {
      gender: "male",
      name: {
        title: "Mr",
        first: "Brett",
        last: "Morales",
      },
      location: {
        street: {
          number: 4657,
          name: "Kings Road",
        },
        city: "Nottingham",
        state: "Gwent",
        country: "United Kingdom",
        postcode: "JD24 2PR",
        coordinates: {
          latitude: "86.5500",
          longitude: "62.0941",
        },
        timezone: {
          offset: "-12:00",
          description: "Eniwetok, Kwajalein",
        },
      },
      email: "brett.morales@example.com",
      login: {
        uuid: "8be7f1b3-103d-4fac-a591-fba75bfecdca",
        username: "blackostrich718",
        password: "bookworm",
        salt: "jMI5zJ5K",
        md5: "695c865e09580df750c4a5f0b42084e7",
        sha1: "69c5ebe3d395359b4d3d322a897966defa389c1a",
        sha256:
          "e91de4e9b7ac26a9f754677f0d03f1768711f66ec6ea254f98b767e3d00c0fce",
      },
      dob: {
        date: "1977-07-06T23:56:16.669Z",
        age: 45,
      },
      registered: {
        date: "2009-12-06T08:54:41.218Z",
        age: 13,
      },
      phone: "016973 51732",
      cell: "0723-107-636",
      id: {
        name: "NINO",
        value: "AE 38 74 02 V",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/89.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/89.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/89.jpg",
      },
      nat: "GB",
    },
    {
      gender: "female",
      name: {
        title: "Mrs",
        first: "Barb",
        last: "Chavez",
      },
      location: {
        street: {
          number: 9423,
          name: "Green Lane",
        },
        city: "Birmingham",
        state: "Somerset",
        country: "United Kingdom",
        postcode: "L1 1WE",
        coordinates: {
          latitude: "-25.2486",
          longitude: "-69.0593",
        },
        timezone: {
          offset: "+8:00",
          description: "Beijing, Perth, Singapore, Hong Kong",
        },
      },
      email: "barb.chavez@example.com",
      login: {
        uuid: "cf616f95-4fb0-470e-aa7b-32edbf8134b2",
        username: "goldenduck319",
        password: "richard1",
        salt: "XDFfL9mM",
        md5: "710050ecf146d90291f2fbab7c95b4dc",
        sha1: "48a35b62a3039b7b86b4ba650a70e357d65b419b",
        sha256:
          "f8243a45eed46bf47e88050919f295cdb1f07bc7157fae1c9ced0204c630f17b",
      },
      dob: {
        date: "1974-03-22T03:49:05.979Z",
        age: 48,
      },
      registered: {
        date: "2008-05-03T10:18:12.400Z",
        age: 14,
      },
      phone: "019467 05154",
      cell: "0769-554-319",
      id: {
        name: "NINO",
        value: "OJ 27 12 32 N",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/women/22.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/22.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/22.jpg",
      },
      nat: "GB",
    },
    {
      gender: "male",
      name: {
        title: "Mr",
        first: "Mathew",
        last: "Campbell",
      },
      location: {
        street: {
          number: 1661,
          name: "Church Street",
        },
        city: "St Albans",
        state: "County Tyrone",
        country: "United Kingdom",
        postcode: "Y0N 6ZF",
        coordinates: {
          latitude: "26.2187",
          longitude: "9.8776",
        },
        timezone: {
          offset: "+6:00",
          description: "Almaty, Dhaka, Colombo",
        },
      },
      email: "mathew.campbell@example.com",
      login: {
        uuid: "fca3a3c0-f44c-4207-b519-66ae4e666d1a",
        username: "sadkoala882",
        password: "felix1",
        salt: "hEc4cafZ",
        md5: "097250d87d131ccdf79e64dfc96dea67",
        sha1: "533bcb16019cf4823fc9825eaada4e60ab4ba4ae",
        sha256:
          "cc96837ef31eace041e57cbc3bf0890f85416a83e4f10848580847e7b1b3ae20",
      },
      dob: {
        date: "1948-12-28T13:05:44.109Z",
        age: 74,
      },
      registered: {
        date: "2013-09-09T00:16:05.386Z",
        age: 9,
      },
      phone: "016977 4262",
      cell: "0757-961-864",
      id: {
        name: "NINO",
        value: "TR 19 11 24 R",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/32.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/32.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/32.jpg",
      },
      nat: "GB",
    },
    {
      gender: "female",
      name: {
        title: "Miss",
        first: "Susie",
        last: "Andrews",
      },
      location: {
        street: {
          number: 1502,
          name: "The Grove",
        },
        city: "Newry",
        state: "Norfolk",
        country: "United Kingdom",
        postcode: "B0V 6TJ",
        coordinates: {
          latitude: "-57.0356",
          longitude: "-37.2196",
        },
        timezone: {
          offset: "+4:00",
          description: "Abu Dhabi, Muscat, Baku, Tbilisi",
        },
      },
      email: "susie.andrews@example.com",
      login: {
        uuid: "8c5fefa2-712b-45ff-a258-3e45b7fa1ae6",
        username: "smallswan942",
        password: "life",
        salt: "iBv27SEM",
        md5: "bbd1761a13f271429eceaf12845fede7",
        sha1: "4723f5273d7f458003430e2304b6e56d52ed4d6d",
        sha256:
          "b5e98bc39eca581bf01d42c70e93c7b41129d4ebbca083c75c31240f79870e21",
      },
      dob: {
        date: "1995-05-21T01:38:38.518Z",
        age: 27,
      },
      registered: {
        date: "2011-05-16T12:52:56.940Z",
        age: 11,
      },
      phone: "013873 88769",
      cell: "0746-314-372",
      id: {
        name: "NINO",
        value: "YT 54 42 21 L",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/women/47.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/47.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/47.jpg",
      },
      nat: "GB",
    },
    {
      gender: "male",
      name: {
        title: "Mr",
        first: "Christopher",
        last: "Evans",
      },
      location: {
        street: {
          number: 2569,
          name: "Kings Road",
        },
        city: "Wolverhampton",
        state: "Merseyside",
        country: "United Kingdom",
        postcode: "Y29 8DT",
        coordinates: {
          latitude: "36.8647",
          longitude: "-84.6038",
        },
        timezone: {
          offset: "-1:00",
          description: "Azores, Cape Verde Islands",
        },
      },
      email: "christopher.evans@example.com",
      login: {
        uuid: "93ef3494-3ff7-45c0-87ba-0530f2534226",
        username: "blackfrog789",
        password: "conover",
        salt: "TIS9civD",
        md5: "ba0e8673f3fbae19613330afad9937fa",
        sha1: "01bd9ff0846a2af82711c945bb02942edec0174d",
        sha256:
          "8244abeee5abd62e644a9a752ac2509868a4a192a3a2c50c5d2f5a044aa41fc4",
      },
      dob: {
        date: "1949-04-29T00:21:44.931Z",
        age: 73,
      },
      registered: {
        date: "2004-11-14T10:42:04.930Z",
        age: 18,
      },
      phone: "015394 90006",
      cell: "0773-668-192",
      id: {
        name: "NINO",
        value: "HC 22 45 35 F",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/65.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/65.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/65.jpg",
      },
      nat: "GB",
    },
    {
      gender: "male",
      name: {
        title: "Mr",
        first: "Steve",
        last: "Curtis",
      },
      location: {
        street: {
          number: 2670,
          name: "North Road",
        },
        city: "Plymouth",
        state: "Clwyd",
        country: "United Kingdom",
        postcode: "T38 7PD",
        coordinates: {
          latitude: "-86.8412",
          longitude: "151.6128",
        },
        timezone: {
          offset: "-8:00",
          description: "Pacific Time (US & Canada)",
        },
      },
      email: "steve.curtis@example.com",
      login: {
        uuid: "57bad3c9-042b-4a60-b404-490ca1eb6a31",
        username: "organicgoose156",
        password: "latinas",
        salt: "RC7U6TUw",
        md5: "0eee92ede1868759dc6ccc52fdd94784",
        sha1: "f136cc2b9c19c13bcde3d7be817ba7b4c58c3142",
        sha256:
          "ef13a5f5c4219451e38da4135d46012651ec66177c0f1b1ecd8d60e1cdab3a4e",
      },
      dob: {
        date: "1963-06-09T15:59:52.793Z",
        age: 59,
      },
      registered: {
        date: "2011-12-24T21:54:03.101Z",
        age: 11,
      },
      phone: "015394 44970",
      cell: "0723-161-193",
      id: {
        name: "NINO",
        value: "JM 56 00 61 N",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/2.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/2.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/2.jpg",
      },
      nat: "GB",
    },
    {
      gender: "female",
      name: {
        title: "Ms",
        first: "Brittany",
        last: "Garza",
      },
      location: {
        street: {
          number: 1615,
          name: "High Street",
        },
        city: "Edinburgh",
        state: "County Armagh",
        country: "United Kingdom",
        postcode: "T78 3QH",
        coordinates: {
          latitude: "22.7019",
          longitude: "-155.1056",
        },
        timezone: {
          offset: "-6:00",
          description: "Central Time (US & Canada), Mexico City",
        },
      },
      email: "brittany.garza@example.com",
      login: {
        uuid: "e1d07434-a974-478f-9cf8-221aef41dc50",
        username: "redpanda843",
        password: "patrick1",
        salt: "ssvTqDxF",
        md5: "3b597bb21ba0120c6186a5f1750cd27b",
        sha1: "f3547033499b2d3d44896c191ffd52aa08a7193d",
        sha256:
          "c748b286ccd39716677fa337b235b71ec448d9f5409fd22c440c473b5c5c62c6",
      },
      dob: {
        date: "1991-03-30T14:25:25.005Z",
        age: 31,
      },
      registered: {
        date: "2019-05-10T17:52:33.895Z",
        age: 3,
      },
      phone: "013873 13663",
      cell: "0788-514-748",
      id: {
        name: "NINO",
        value: "BG 60 88 49 B",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/women/31.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/31.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/31.jpg",
      },
      nat: "GB",
    },
    {
      gender: "female",
      name: {
        title: "Miss",
        first: "Abigail",
        last: "Holmes",
      },
      location: {
        street: {
          number: 612,
          name: "New Road",
        },
        city: "Salford",
        state: "Buckinghamshire",
        country: "United Kingdom",
        postcode: "T4S 3UX",
        coordinates: {
          latitude: "45.7314",
          longitude: "125.3603",
        },
        timezone: {
          offset: "+5:00",
          description: "Ekaterinburg, Islamabad, Karachi, Tashkent",
        },
      },
      email: "abigail.holmes@example.com",
      login: {
        uuid: "1079206d-dab4-4994-93ab-7da7fcb52d87",
        username: "greenleopard910",
        password: "super1",
        salt: "umPnqNCI",
        md5: "0463444c0d603679d5bd2e5c8ee90345",
        sha1: "a71898e480731df1eb31bb65e6f54e7d37922761",
        sha256:
          "742ed35c39385bf2fb509527c1af6ffcf28236bd5ea9f4e1c9dcb305d81dc0ba",
      },
      dob: {
        date: "1956-12-14T21:33:15.659Z",
        age: 66,
      },
      registered: {
        date: "2006-02-16T03:10:39.185Z",
        age: 16,
      },
      phone: "0151 657 4170",
      cell: "0797-248-633",
      id: {
        name: "NINO",
        value: "ZP 36 76 54 L",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/women/65.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/65.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/65.jpg",
      },
      nat: "GB",
    },
    {
      gender: "female",
      name: {
        title: "Miss",
        first: "Laura",
        last: "Silva",
      },
      location: {
        street: {
          number: 7923,
          name: "Grove Road",
        },
        city: "Coventry",
        state: "Rutland",
        country: "United Kingdom",
        postcode: "EN55 5PW",
        coordinates: {
          latitude: "71.0546",
          longitude: "115.5207",
        },
        timezone: {
          offset: "-8:00",
          description: "Pacific Time (US & Canada)",
        },
      },
      email: "laura.silva@example.com",
      login: {
        uuid: "3ed8f3aa-bc08-42dd-b61f-3abf5fc52c85",
        username: "organicduck450",
        password: "sage",
        salt: "CwUIP4xz",
        md5: "eb4c0409e52d70404fe5a3a34ce7ae2e",
        sha1: "f4fb2823fbc80bfbc8efece841f5d5cb5708af56",
        sha256:
          "36759225d6d05598f4e21f39da14fb62876f87eb35e711a5684b91b9aa6f165c",
      },
      dob: {
        date: "1961-04-01T20:28:23.271Z",
        age: 61,
      },
      registered: {
        date: "2015-03-28T11:16:45.959Z",
        age: 7,
      },
      phone: "019467 27954",
      cell: "0763-224-141",
      id: {
        name: "NINO",
        value: "ER 37 17 74 H",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/women/37.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/37.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/37.jpg",
      },
      nat: "GB",
    },
    {
      gender: "female",
      name: {
        title: "Mrs",
        first: "Alexandra",
        last: "Fernandez",
      },
      location: {
        street: {
          number: 257,
          name: "New Street",
        },
        city: "Carlisle",
        state: "Cambridgeshire",
        country: "United Kingdom",
        postcode: "J3 4JG",
        coordinates: {
          latitude: "69.4644",
          longitude: "-146.2130",
        },
        timezone: {
          offset: "0:00",
          description: "Western Europe Time, London, Lisbon, Casablanca",
        },
      },
      email: "alexandra.fernandez@example.com",
      login: {
        uuid: "2785a3cc-52bb-4c3e-9eca-5908ee254f25",
        username: "purpleostrich208",
        password: "monty1",
        salt: "Xf3WxBje",
        md5: "384a1f1b5d17576b22b850317f9a583b",
        sha1: "453d6e0cbd7fea20e433a7fa2ea05999d562700b",
        sha256:
          "da9cdf9d45416a78c38c4dc7cc574801a8cf77b50c3a8cb47e01af02dca7bcb6",
      },
      dob: {
        date: "1958-11-11T20:03:25.379Z",
        age: 64,
      },
      registered: {
        date: "2010-02-05T13:46:50.321Z",
        age: 12,
      },
      phone: "024 2047 0537",
      cell: "0715-752-010",
      id: {
        name: "NINO",
        value: "RJ 86 14 31 V",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/women/42.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/42.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/42.jpg",
      },
      nat: "GB",
    },
    {
      gender: "male",
      name: {
        title: "Mr",
        first: "Joshua",
        last: "Richardson",
      },
      location: {
        street: {
          number: 9715,
          name: "St. John’S Road",
        },
        city: "Stoke-on-Trent",
        state: "County Fermanagh",
        country: "United Kingdom",
        postcode: "I3J 8TF",
        coordinates: {
          latitude: "-7.2054",
          longitude: "19.5246",
        },
        timezone: {
          offset: "+9:00",
          description: "Tokyo, Seoul, Osaka, Sapporo, Yakutsk",
        },
      },
      email: "joshua.richardson@example.com",
      login: {
        uuid: "a90bda89-9bd9-4e84-bd7f-73288c97363d",
        username: "redduck980",
        password: "sound",
        salt: "GZ2ed8ay",
        md5: "874be6bf0eec8af055af4fa66b8af73a",
        sha1: "d559a427f83f379b21d354f50b1a7f96075f3c8b",
        sha256:
          "af96249cdec7fb69bd9dcfeb7e4f7874835558738af176ed0ae82821a5accd31",
      },
      dob: {
        date: "1966-07-11T18:23:15.182Z",
        age: 56,
      },
      registered: {
        date: "2015-03-03T21:07:26.936Z",
        age: 7,
      },
      phone: "017683 94193",
      cell: "0766-140-720",
      id: {
        name: "NINO",
        value: "HS 72 44 30 J",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/92.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/92.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/92.jpg",
      },
      nat: "GB",
    },
    {
      gender: "male",
      name: {
        title: "Mr",
        first: "Terry",
        last: "Stone",
      },
      location: {
        street: {
          number: 9664,
          name: "Bridge Road",
        },
        city: "Lichfield",
        state: "Surrey",
        country: "United Kingdom",
        postcode: "YT6 2WL",
        coordinates: {
          latitude: "-82.1223",
          longitude: "94.2616",
        },
        timezone: {
          offset: "+9:00",
          description: "Tokyo, Seoul, Osaka, Sapporo, Yakutsk",
        },
      },
      email: "terry.stone@example.com",
      login: {
        uuid: "01e5afda-8510-42af-86ca-fb102497606a",
        username: "reddog793",
        password: "redsox",
        salt: "FmkQo739",
        md5: "2a96eb0f602651d87d943f792cbd6812",
        sha1: "72a601ceef59c4cb53d58645f265387852cfacea",
        sha256:
          "f29056b49f12c33fc05da2eae42e1b0b881e7fd01aa75d04eeb4a8ece7e93dee",
      },
      dob: {
        date: "1956-11-22T08:17:58.062Z",
        age: 66,
      },
      registered: {
        date: "2010-02-22T06:21:52.818Z",
        age: 12,
      },
      phone: "019467 31709",
      cell: "0738-883-000",
      id: {
        name: "NINO",
        value: "TH 68 44 62 A",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/47.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/47.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/47.jpg",
      },
      nat: "GB",
    },
    {
      gender: "male",
      name: {
        title: "Mr",
        first: "Joseph",
        last: "Mendoza",
      },
      location: {
        street: {
          number: 9811,
          name: "Rectory Lane",
        },
        city: "Norwich",
        state: "Tyne and Wear",
        country: "United Kingdom",
        postcode: "CW46 6PQ",
        coordinates: {
          latitude: "-4.5133",
          longitude: "-34.7383",
        },
        timezone: {
          offset: "-11:00",
          description: "Midway Island, Samoa",
        },
      },
      email: "joseph.mendoza@example.com",
      login: {
        uuid: "eb8f28b7-593d-4597-accc-2f333e414560",
        username: "orangezebra270",
        password: "smokes",
        salt: "jc58ADpk",
        md5: "1bddb8989721e18821857077593c680b",
        sha1: "0ef5570bd454cb6ec0d603e872af67423b8604bd",
        sha256:
          "a903fc7b2a73b4450d39a4ab65e1870a8176bcee698e2ca34a612823532be178",
      },
      dob: {
        date: "1980-07-29T07:12:38.422Z",
        age: 42,
      },
      registered: {
        date: "2011-07-15T14:58:49.018Z",
        age: 11,
      },
      phone: "0113523 062 9953",
      cell: "0746-159-751",
      id: {
        name: "NINO",
        value: "SL 16 80 55 S",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/60.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/60.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/60.jpg",
      },
      nat: "GB",
    },
    {
      gender: "female",
      name: {
        title: "Miss",
        first: "Hanna",
        last: "Jenkins",
      },
      location: {
        street: {
          number: 164,
          name: "North Road",
        },
        city: "Worcester",
        state: "Fife",
        country: "United Kingdom",
        postcode: "V60 6XH",
        coordinates: {
          latitude: "-88.5942",
          longitude: "150.5463",
        },
        timezone: {
          offset: "-9:00",
          description: "Alaska",
        },
      },
      email: "hanna.jenkins@example.com",
      login: {
        uuid: "b63fc3e4-e7e1-449e-8081-a1bc23816c35",
        username: "organicswan341",
        password: "qian",
        salt: "0E1fEhyS",
        md5: "f38ee473b23ea0d67abd9b7a7d9cc143",
        sha1: "d9f1962f8b4175442f4e58ccec5005f61976f703",
        sha256:
          "1e448abf257dc31964ee33f802e9f8bf9bba87c573cbb6025b0cf984fcac2417",
      },
      dob: {
        date: "1947-01-25T03:46:18.188Z",
        age: 75,
      },
      registered: {
        date: "2005-07-25T03:37:31.668Z",
        age: 17,
      },
      phone: "016977 3571",
      cell: "0738-966-120",
      id: {
        name: "NINO",
        value: "BZ 40 30 26 O",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/women/14.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/14.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/14.jpg",
      },
      nat: "GB",
    },
    {
      gender: "male",
      name: {
        title: "Mr",
        first: "Riley",
        last: "Holmes",
      },
      location: {
        street: {
          number: 3150,
          name: "The Grove",
        },
        city: "Londonderry",
        state: "Cheshire",
        country: "United Kingdom",
        postcode: "K53 3QP",
        coordinates: {
          latitude: "40.6626",
          longitude: "-143.6880",
        },
        timezone: {
          offset: "0:00",
          description: "Western Europe Time, London, Lisbon, Casablanca",
        },
      },
      email: "riley.holmes@example.com",
      login: {
        uuid: "b332bad9-fa57-40c7-8f65-ee629fc857a9",
        username: "silverleopard730",
        password: "thick",
        salt: "5XOibfw3",
        md5: "70a215beb83902e0eb855fe2e2a39003",
        sha1: "7de161400f2c9e6825c7748e9e614f497ba6ab69",
        sha256:
          "b1b236acdbc4c1a16b028e45352f3035a0a9af8177d039f2715661120d7ddc58",
      },
      dob: {
        date: "1987-04-21T15:06:20.284Z",
        age: 35,
      },
      registered: {
        date: "2014-11-17T00:17:00.775Z",
        age: 8,
      },
      phone: "016974 32671",
      cell: "0726-215-246",
      id: {
        name: "NINO",
        value: "AP 51 30 34 U",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/85.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/85.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/85.jpg",
      },
      nat: "GB",
    },
    {
      gender: "male",
      name: {
        title: "Mr",
        first: "Darrell",
        last: "Willis",
      },
      location: {
        street: {
          number: 5458,
          name: "Main Road",
        },
        city: "Southampton",
        state: "Shropshire",
        country: "United Kingdom",
        postcode: "FC5 3QQ",
        coordinates: {
          latitude: "66.6877",
          longitude: "-87.5026",
        },
        timezone: {
          offset: "+3:30",
          description: "Tehran",
        },
      },
      email: "darrell.willis@example.com",
      login: {
        uuid: "cf891ec4-4dd6-44ab-a24c-9e7b07c26fe4",
        username: "sadmouse799",
        password: "optimus",
        salt: "bEIyKPgu",
        md5: "017d37321931b40c52bfa637840fa4c3",
        sha1: "5920aae75e68f770103662a0ccb1128bd3070467",
        sha256:
          "d7777cb8648b0112f95a33de3579deea562416fcf58bdf154b48318d8c50ccb2",
      },
      dob: {
        date: "1971-08-15T03:17:06.311Z",
        age: 51,
      },
      registered: {
        date: "2013-06-20T21:55:00.062Z",
        age: 9,
      },
      phone: "019467 01891",
      cell: "0770-633-532",
      id: {
        name: "NINO",
        value: "AS 24 58 19 G",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/63.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/63.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/63.jpg",
      },
      nat: "GB",
    },
    {
      gender: "male",
      name: {
        title: "Mr",
        first: "Curtis",
        last: "Reid",
      },
      location: {
        street: {
          number: 4069,
          name: "Park Road",
        },
        city: "Birmingham",
        state: "Tayside",
        country: "United Kingdom",
        postcode: "R57 7GQ",
        coordinates: {
          latitude: "-6.7956",
          longitude: "22.3801",
        },
        timezone: {
          offset: "+3:30",
          description: "Tehran",
        },
      },
      email: "curtis.reid@example.com",
      login: {
        uuid: "b83c3a63-36a4-43e7-aa61-5eca9682f7cb",
        username: "organiczebra795",
        password: "mirage",
        salt: "rEfXALja",
        md5: "944647f312ff2aa74fb1b74b38488e3c",
        sha1: "c79d4d8943588a56ba209e2156bb0b409724fe53",
        sha256:
          "53f7e0ae3f7e9f078240f2aedd76ca88bed8556bd66ef018a377ee7d6124196f",
      },
      dob: {
        date: "1964-11-27T11:12:51.033Z",
        age: 58,
      },
      registered: {
        date: "2002-10-31T22:48:52.143Z",
        age: 20,
      },
      phone: "015394 75228",
      cell: "0788-716-791",
      id: {
        name: "NINO",
        value: "AT 53 00 53 G",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/34.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/34.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/34.jpg",
      },
      nat: "GB",
    },
    {
      gender: "male",
      name: {
        title: "Mr",
        first: "Alfredo",
        last: "Wood",
      },
      location: {
        street: {
          number: 7757,
          name: "Station Road",
        },
        city: "Stevenage",
        state: "Staffordshire",
        country: "United Kingdom",
        postcode: "S32 9LH",
        coordinates: {
          latitude: "-46.3997",
          longitude: "-69.4107",
        },
        timezone: {
          offset: "-7:00",
          description: "Mountain Time (US & Canada)",
        },
      },
      email: "alfredo.wood@example.com",
      login: {
        uuid: "3697af9a-c9d4-4081-b6d1-e06038c46a62",
        username: "crazybird246",
        password: "here",
        salt: "Y581Hncr",
        md5: "de467ba4b489e4d1dd8f77d2a9a0a81c",
        sha1: "84733e93a31f5bb64f482c86de622b18c02c4176",
        sha256:
          "6764846032f8d8e65394913d223bba50c8cd1a91b78049db6bcf631de056613e",
      },
      dob: {
        date: "1963-08-04T23:47:48.051Z",
        age: 59,
      },
      registered: {
        date: "2004-09-21T02:20:00.789Z",
        age: 18,
      },
      phone: "016974 95986",
      cell: "0757-891-639",
      id: {
        name: "NINO",
        value: "GB 71 43 38 C",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/77.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/77.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/77.jpg",
      },
      nat: "GB",
    },
    {
      gender: "female",
      name: {
        title: "Ms",
        first: "Ashley",
        last: "Craig",
      },
      location: {
        street: {
          number: 2370,
          name: "New Road",
        },
        city: "Kingston upon Hull",
        state: "Worcestershire",
        country: "United Kingdom",
        postcode: "QT3 8FW",
        coordinates: {
          latitude: "1.9260",
          longitude: "19.5654",
        },
        timezone: {
          offset: "-3:30",
          description: "Newfoundland",
        },
      },
      email: "ashley.craig@example.com",
      login: {
        uuid: "09728174-8173-4082-8195-12e7a624e9d6",
        username: "greenrabbit269",
        password: "silence",
        salt: "bN5GvX2J",
        md5: "b155e55a61d9615fb18a5a0aab133526",
        sha1: "b4fbccdb7d8329980ec23acd8005ec2070588b6d",
        sha256:
          "c2f007bd03a32dd56cc47357821e4d49c9114011cf8afda6bc44fd581b9cd90c",
      },
      dob: {
        date: "1982-04-24T00:54:06.650Z",
        age: 40,
      },
      registered: {
        date: "2003-08-16T15:48:40.645Z",
        age: 19,
      },
      phone: "01326 708550",
      cell: "0795-868-666",
      id: {
        name: "NINO",
        value: "TP 67 38 36 N",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/women/86.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/86.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/86.jpg",
      },
      nat: "GB",
    },
    {
      gender: "female",
      name: {
        title: "Mrs",
        first: "Heather",
        last: "Martin",
      },
      location: {
        street: {
          number: 9048,
          name: "Fairview Road",
        },
        city: "City of London",
        state: "Leicestershire",
        country: "United Kingdom",
        postcode: "DG94 1YE",
        coordinates: {
          latitude: "54.7402",
          longitude: "-78.4908",
        },
        timezone: {
          offset: "+4:00",
          description: "Abu Dhabi, Muscat, Baku, Tbilisi",
        },
      },
      email: "heather.martin@example.com",
      login: {
        uuid: "4e9738ab-c60d-4877-8518-f605e8bf06a1",
        username: "sadduck466",
        password: "wrestling",
        salt: "qVLrzpcO",
        md5: "cc63efabb68343cff07e07b6568811b7",
        sha1: "d294dbc7241ab341d164a7cf1d440816a948a5f6",
        sha256:
          "b577121947b71f923b2b0cb722e943e050bfaa84962a75d6072a0772de176426",
      },
      dob: {
        date: "1997-07-29T14:20:58.351Z",
        age: 25,
      },
      registered: {
        date: "2009-01-25T21:40:40.468Z",
        age: 13,
      },
      phone: "015242 82749",
      cell: "0740-871-851",
      id: {
        name: "NINO",
        value: "HH 75 85 67 W",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/women/8.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/8.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/8.jpg",
      },
      nat: "GB",
    },
    {
      gender: "female",
      name: {
        title: "Ms",
        first: "Martha",
        last: "Olson",
      },
      location: {
        street: {
          number: 1780,
          name: "High Street",
        },
        city: "Sunderland",
        state: "Highlands and Islands",
        country: "United Kingdom",
        postcode: "G8 2BW",
        coordinates: {
          latitude: "20.9907",
          longitude: "73.4597",
        },
        timezone: {
          offset: "-12:00",
          description: "Eniwetok, Kwajalein",
        },
      },
      email: "martha.olson@example.com",
      login: {
        uuid: "1d164f76-5a75-411b-9fdb-faf25d74c130",
        username: "bigbear294",
        password: "kathy",
        salt: "ozA42fBz",
        md5: "4d18896c06982d3310d4b83f6db314cf",
        sha1: "6a833de076dc8b2163ab5fe7ef2ed2d07e77fdd2",
        sha256:
          "6c9bd5d0b829ef2fe002bc412d74884b9f4c66807e411cea379bf2ef33091fc3",
      },
      dob: {
        date: "1954-05-25T23:32:56.839Z",
        age: 68,
      },
      registered: {
        date: "2004-08-07T14:29:20.020Z",
        age: 18,
      },
      phone: "016974 78109",
      cell: "0735-676-281",
      id: {
        name: "NINO",
        value: "HG 26 02 46 O",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/women/0.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/0.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/0.jpg",
      },
      nat: "GB",
    },
    {
      gender: "male",
      name: {
        title: "Mr",
        first: "John",
        last: "Porter",
      },
      location: {
        street: {
          number: 8873,
          name: "Mill Road",
        },
        city: "Chichester",
        state: "Grampian",
        country: "United Kingdom",
        postcode: "EX1U 5QN",
        coordinates: {
          latitude: "-22.8744",
          longitude: "-52.6588",
        },
        timezone: {
          offset: "-3:00",
          description: "Brazil, Buenos Aires, Georgetown",
        },
      },
      email: "john.porter@example.com",
      login: {
        uuid: "eac9c0ed-c6bc-419f-9a77-635ba1bc684e",
        username: "greenelephant928",
        password: "paco",
        salt: "sFhTAbkP",
        md5: "82944d9c8e78987eed521c37328ca335",
        sha1: "e91c35ab40b7a6316a122591f5823351f72b3c88",
        sha256:
          "1833fd6fa33fd79cdca8af704064840dcd1fb5d495e6be2a3e2a603081e64e7a",
      },
      dob: {
        date: "1993-12-05T18:47:29.622Z",
        age: 29,
      },
      registered: {
        date: "2005-02-10T04:41:11.691Z",
        age: 17,
      },
      phone: "015394 64876",
      cell: "0725-432-036",
      id: {
        name: "NINO",
        value: "ZJ 27 39 70 M",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/44.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/44.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/44.jpg",
      },
      nat: "GB",
    },
    {
      gender: "female",
      name: {
        title: "Ms",
        first: "Tracey",
        last: "Tucker",
      },
      location: {
        street: {
          number: 3272,
          name: "The Avenue",
        },
        city: "Chichester",
        state: "Lincolnshire",
        country: "United Kingdom",
        postcode: "NA0 6EB",
        coordinates: {
          latitude: "34.6850",
          longitude: "-51.6934",
        },
        timezone: {
          offset: "+2:00",
          description: "Kaliningrad, South Africa",
        },
      },
      email: "tracey.tucker@example.com",
      login: {
        uuid: "8de0ac45-479b-48c6-941f-3a983d3f5c72",
        username: "crazymouse891",
        password: "lewis",
        salt: "cpznG9KP",
        md5: "b8227c178cfa4627ccca64febaab35c9",
        sha1: "541fffc10de10ad6e8ad22e4c46fb61848143b39",
        sha256:
          "5310deeecd026ce7bbf5f8d59901371a3da788726efe4e349b2250f7ef65c5b5",
      },
      dob: {
        date: "1963-10-01T11:50:24.445Z",
        age: 59,
      },
      registered: {
        date: "2018-05-19T13:50:40.292Z",
        age: 4,
      },
      phone: "015394 28827",
      cell: "0740-594-999",
      id: {
        name: "NINO",
        value: "HY 68 87 31 Y",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/women/75.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/75.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/75.jpg",
      },
      nat: "GB",
    },
    {
      gender: "female",
      name: {
        title: "Mrs",
        first: "Diane",
        last: "Macrae",
      },
      location: {
        street: {
          number: 5339,
          name: "North Road",
        },
        city: "Edinburgh",
        state: "Powys",
        country: "United Kingdom",
        postcode: "V4 3ZY",
        coordinates: {
          latitude: "55.0763",
          longitude: "-81.7282",
        },
        timezone: {
          offset: "-2:00",
          description: "Mid-Atlantic",
        },
      },
      email: "diane.macrae@example.com",
      login: {
        uuid: "a61e2189-ec18-440b-9af3-8536873be002",
        username: "greenduck899",
        password: "harrier",
        salt: "zy5hopDo",
        md5: "a471de54b17fb2f6a063059b2fd3f763",
        sha1: "a21476d7e4eac055ab14b708c818c6ca6573529f",
        sha256:
          "c0b358bf68a2de4bd0653e0282265a937c9448c78ec4a87f32ed0a6c6c24dc66",
      },
      dob: {
        date: "1980-07-06T03:15:59.956Z",
        age: 42,
      },
      registered: {
        date: "2014-01-04T19:08:00.274Z",
        age: 8,
      },
      phone: "016974 75249",
      cell: "0773-885-827",
      id: {
        name: "NINO",
        value: "JM 69 39 80 P",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/women/92.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/92.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/92.jpg",
      },
      nat: "GB",
    },
    {
      gender: "female",
      name: {
        title: "Ms",
        first: "Isabelle",
        last: "Silva",
      },
      location: {
        street: {
          number: 4913,
          name: "Broadway",
        },
        city: "Edinburgh",
        state: "Worcestershire",
        country: "United Kingdom",
        postcode: "SB69 5GZ",
        coordinates: {
          latitude: "28.0849",
          longitude: "-6.1199",
        },
        timezone: {
          offset: "+4:30",
          description: "Kabul",
        },
      },
      email: "isabelle.silva@example.com",
      login: {
        uuid: "0d60edb1-cfe1-4807-9b14-2cfab0af131b",
        username: "whiteostrich873",
        password: "kingpin",
        salt: "HUBrxCSa",
        md5: "3da96f370f35e7811d25869fc0fd43d9",
        sha1: "ad4d5f2eada76f658bcc113e71c84579e2455cbd",
        sha256:
          "f0c4794d80e816ba9ffd5a5976fd7f2e2fafdb693b494785024fd5f02d869372",
      },
      dob: {
        date: "1964-06-13T04:14:17.283Z",
        age: 58,
      },
      registered: {
        date: "2013-06-22T20:07:58.139Z",
        age: 9,
      },
      phone: "019467 66609",
      cell: "0704-494-923",
      id: {
        name: "NINO",
        value: "JJ 46 90 20 S",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/women/9.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/9.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/9.jpg",
      },
      nat: "GB",
    },
    {
      gender: "female",
      name: {
        title: "Mrs",
        first: "Abby",
        last: "Cruz",
      },
      location: {
        street: {
          number: 7036,
          name: "Main Street",
        },
        city: "Ely",
        state: "Berkshire",
        country: "United Kingdom",
        postcode: "AP7Z 4JR",
        coordinates: {
          latitude: "84.4476",
          longitude: "69.0311",
        },
        timezone: {
          offset: "+4:00",
          description: "Abu Dhabi, Muscat, Baku, Tbilisi",
        },
      },
      email: "abby.cruz@example.com",
      login: {
        uuid: "804aaa84-3898-4f8c-be94-8e7aa474e654",
        username: "heavykoala813",
        password: "darkness",
        salt: "26clBfKj",
        md5: "f821b49d58b7d7b8c416dd19fd911744",
        sha1: "f27c67d21914554e63a71396cf00c81deb494521",
        sha256:
          "f9d38b564c64c66599a8ca4557329b958c6e871bab48a5a680cda2a5e93c5ae6",
      },
      dob: {
        date: "1974-11-05T17:58:04.363Z",
        age: 48,
      },
      registered: {
        date: "2008-04-23T03:18:17.571Z",
        age: 14,
      },
      phone: "015242 83300",
      cell: "0772-859-398",
      id: {
        name: "NINO",
        value: "ZR 48 60 35 C",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/women/80.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/80.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/80.jpg",
      },
      nat: "GB",
    },
    {
      gender: "female",
      name: {
        title: "Mrs",
        first: "Ellie",
        last: "Lewis",
      },
      location: {
        street: {
          number: 3529,
          name: "West Street",
        },
        city: "City of London",
        state: "Fife",
        country: "United Kingdom",
        postcode: "AH38 8LS",
        coordinates: {
          latitude: "-84.6918",
          longitude: "-56.4733",
        },
        timezone: {
          offset: "-4:00",
          description: "Atlantic Time (Canada), Caracas, La Paz",
        },
      },
      email: "ellie.lewis@example.com",
      login: {
        uuid: "aed43c6e-a268-4494-8ad2-f85bbc8cd08e",
        username: "blackmeercat872",
        password: "popeye",
        salt: "WeicOcQn",
        md5: "048efd39432b610d60f3d0db3c1a5f85",
        sha1: "55f399af1f7ae04646cc436a0b4ea2fdbac98baa",
        sha256:
          "46517a7e117586f1dac9848465cfd9927bb996e6abb4694f955c0465b9eb6a6d",
      },
      dob: {
        date: "1989-04-19T08:43:16.015Z",
        age: 33,
      },
      registered: {
        date: "2018-02-28T00:19:42.825Z",
        age: 4,
      },
      phone: "01196 944491",
      cell: "0746-978-674",
      id: {
        name: "NINO",
        value: "NT 30 47 58 R",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/women/73.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/73.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/73.jpg",
      },
      nat: "GB",
    },
    {
      gender: "female",
      name: {
        title: "Miss",
        first: "Emma",
        last: "Snyder",
      },
      location: {
        street: {
          number: 1,
          name: "Church Street",
        },
        city: "Glasgow",
        state: "Lothian",
        country: "United Kingdom",
        postcode: "I3 3UU",
        coordinates: {
          latitude: "1.2983",
          longitude: "-152.0190",
        },
        timezone: {
          offset: "-8:00",
          description: "Pacific Time (US & Canada)",
        },
      },
      email: "emma.snyder@example.com",
      login: {
        uuid: "60ad1982-07b5-46b8-bc4f-2a89848fa987",
        username: "bluekoala371",
        password: "beautiful",
        salt: "J9VbUxqU",
        md5: "694371d9ae32852d99cb70ee53f52fe0",
        sha1: "5a57e99fd6027503f2c8ce58d217dfa91c18b525",
        sha256:
          "04dd89bed52395e17e9538cd118e5115bafe4835e01d5983cb21b17607221504",
      },
      dob: {
        date: "1959-11-21T11:57:24.122Z",
        age: 63,
      },
      registered: {
        date: "2003-10-20T04:46:29.836Z",
        age: 19,
      },
      phone: "017684 44821",
      cell: "0705-228-329",
      id: {
        name: "NINO",
        value: "OJ 09 54 94 K",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/women/17.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/17.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/17.jpg",
      },
      nat: "GB",
    },
    {
      gender: "female",
      name: {
        title: "Ms",
        first: "Carol",
        last: "Shelton",
      },
      location: {
        street: {
          number: 4071,
          name: "Alexander Road",
        },
        city: "Sunderland",
        state: "Suffolk",
        country: "United Kingdom",
        postcode: "MY73 8YJ",
        coordinates: {
          latitude: "-54.6775",
          longitude: "-161.8991",
        },
        timezone: {
          offset: "-8:00",
          description: "Pacific Time (US & Canada)",
        },
      },
      email: "carol.shelton@example.com",
      login: {
        uuid: "a7e5526f-24e7-4839-bd82-f49eac5801e0",
        username: "bluefrog530",
        password: "boater",
        salt: "uRVzLwcV",
        md5: "bc2faac5010ebc6e295b8586c1b07ab3",
        sha1: "c4ff75017c7afbe21fe46fad6c7c156559f445bf",
        sha256:
          "e0df4b833b666c9e4c3788bd3672d67dbb71b6a092c021005c3ac8ada1283197",
      },
      dob: {
        date: "1944-10-31T16:32:43.251Z",
        age: 78,
      },
      registered: {
        date: "2003-10-06T18:18:41.531Z",
        age: 19,
      },
      phone: "022 0220 1338",
      cell: "0791-794-954",
      id: {
        name: "NINO",
        value: "XA 17 96 28 X",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/women/16.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/16.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/16.jpg",
      },
      nat: "GB",
    },
    {
      gender: "male",
      name: {
        title: "Mr",
        first: "Clayton",
        last: "Anderson",
      },
      location: {
        street: {
          number: 3288,
          name: "Church Road",
        },
        city: "Derby",
        state: "North Yorkshire",
        country: "United Kingdom",
        postcode: "PX8G 2TQ",
        coordinates: {
          latitude: "-71.1682",
          longitude: "29.8146",
        },
        timezone: {
          offset: "-3:00",
          description: "Brazil, Buenos Aires, Georgetown",
        },
      },
      email: "clayton.anderson@example.com",
      login: {
        uuid: "555f8885-de84-47a5-bce6-8fa3d759665e",
        username: "happyladybug885",
        password: "phyllis",
        salt: "8nBGd1WK",
        md5: "f037bc49b518e2142a99d30dffdfc5ba",
        sha1: "2c30aa6b77f7ce9946aa2c3ff1b3ef886d28ad4f",
        sha256:
          "a65ec180e5efc4747b36793976e09b53bcadeffbbb573eae413010f8524b4951",
      },
      dob: {
        date: "1992-01-08T14:57:04.985Z",
        age: 30,
      },
      registered: {
        date: "2009-11-21T19:06:34.324Z",
        age: 13,
      },
      phone: "015394 63430",
      cell: "0708-943-088",
      id: {
        name: "NINO",
        value: "XH 18 95 02 J",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/36.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/36.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/36.jpg",
      },
      nat: "GB",
    },
    {
      gender: "female",
      name: {
        title: "Mrs",
        first: "Lisa",
        last: "Burke",
      },
      location: {
        street: {
          number: 4291,
          name: "New Street",
        },
        city: "Hereford",
        state: "West Yorkshire",
        country: "United Kingdom",
        postcode: "F0W 5BP",
        coordinates: {
          latitude: "19.2035",
          longitude: "-36.3628",
        },
        timezone: {
          offset: "-12:00",
          description: "Eniwetok, Kwajalein",
        },
      },
      email: "lisa.burke@example.com",
      login: {
        uuid: "db55860c-5479-4f9a-b3f9-5d574973997e",
        username: "angrygoose438",
        password: "shell",
        salt: "NR6j2e1v",
        md5: "44241c10e794ca5c75bfd9b39e4b968e",
        sha1: "57ca6f759bb4f2b7a25386bd6092a278388620d6",
        sha256:
          "65a33bdccb2b2aa4fa62227db99e84a50178a6c9287e905cd09708ec38c196c0",
      },
      dob: {
        date: "1988-08-29T20:32:36.156Z",
        age: 34,
      },
      registered: {
        date: "2004-05-16T01:03:33.588Z",
        age: 18,
      },
      phone: "0119156 590 7325",
      cell: "0784-013-211",
      id: {
        name: "NINO",
        value: "GZ 25 50 40 E",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/women/80.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/80.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/80.jpg",
      },
      nat: "GB",
    },
    {
      gender: "female",
      name: {
        title: "Ms",
        first: "Michelle",
        last: "Castro",
      },
      location: {
        street: {
          number: 7744,
          name: "Church Street",
        },
        city: "Nottingham",
        state: "Suffolk",
        country: "United Kingdom",
        postcode: "R8M 7UF",
        coordinates: {
          latitude: "-18.6514",
          longitude: "159.5898",
        },
        timezone: {
          offset: "-8:00",
          description: "Pacific Time (US & Canada)",
        },
      },
      email: "michelle.castro@example.com",
      login: {
        uuid: "6452fc6c-021d-4c93-af56-397c2efc3ab1",
        username: "ticklishtiger168",
        password: "ling",
        salt: "6Aupnvli",
        md5: "79fbcc54331fb999123899be47e4fe75",
        sha1: "653f36a48af43b127f2d7b01dd95cdb556cbe9b3",
        sha256:
          "cea9611243e447b5ec017498114eaab8dc68f83dc56e96d349cdf9c8b3ac92da",
      },
      dob: {
        date: "1963-06-27T08:41:32.162Z",
        age: 59,
      },
      registered: {
        date: "2013-04-08T09:48:24.898Z",
        age: 9,
      },
      phone: "015396 78970",
      cell: "0727-960-388",
      id: {
        name: "NINO",
        value: "YJ 95 05 21 H",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/women/65.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/65.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/65.jpg",
      },
      nat: "GB",
    },
    {
      gender: "female",
      name: {
        title: "Mrs",
        first: "Rachel",
        last: "Silva",
      },
      location: {
        street: {
          number: 6522,
          name: "Queen Street",
        },
        city: "Inverness",
        state: "Fife",
        country: "United Kingdom",
        postcode: "J62 5BX",
        coordinates: {
          latitude: "-84.9275",
          longitude: "-117.9955",
        },
        timezone: {
          offset: "+1:00",
          description: "Brussels, Copenhagen, Madrid, Paris",
        },
      },
      email: "rachel.silva@example.com",
      login: {
        uuid: "4d7483ca-666a-4688-b05b-9927f592d0e7",
        username: "greenlion820",
        password: "bloody",
        salt: "PMwcApdz",
        md5: "e917ff8e5d6892c32ee6378650112ee7",
        sha1: "079edfb4bfa5e50227c81d5693689b405896fb6d",
        sha256:
          "20669a7b162fa9b758627be331092b5c85ad7ce9c3cc46680e1a8c0f7df89440",
      },
      dob: {
        date: "1953-03-19T17:16:51.024Z",
        age: 69,
      },
      registered: {
        date: "2003-09-02T17:42:16.800Z",
        age: 19,
      },
      phone: "017684 38126",
      cell: "0714-102-095",
      id: {
        name: "NINO",
        value: "YJ 23 17 65 C",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/women/27.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/27.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/27.jpg",
      },
      nat: "GB",
    },
    {
      gender: "male",
      name: {
        title: "Mr",
        first: "Leo",
        last: "Lopez",
      },
      location: {
        street: {
          number: 8203,
          name: "Richmond Road",
        },
        city: "Londonderry",
        state: "Rutland",
        country: "United Kingdom",
        postcode: "M1 3SB",
        coordinates: {
          latitude: "47.6260",
          longitude: "-46.6512",
        },
        timezone: {
          offset: "-10:00",
          description: "Hawaii",
        },
      },
      email: "leo.lopez@example.com",
      login: {
        uuid: "440b81a0-864c-4585-8462-8ebb5db71834",
        username: "redzebra560",
        password: "cupcake",
        salt: "gQ9xAyye",
        md5: "a51f3be67c859805c4b0cd1aede36e96",
        sha1: "fd2a4ddc68a9d850f22c634328dfe6616d15a4fe",
        sha256:
          "bab7b009fd5a0a246f63d66042c09d20dd805395326dbd3714faa45433011bca",
      },
      dob: {
        date: "1947-12-03T07:47:04.227Z",
        age: 75,
      },
      registered: {
        date: "2005-09-23T12:23:02.687Z",
        age: 17,
      },
      phone: "016977 07906",
      cell: "0720-003-800",
      id: {
        name: "NINO",
        value: "BG 56 19 49 Z",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/24.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/24.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/24.jpg",
      },
      nat: "GB",
    },
    {
      gender: "male",
      name: {
        title: "Mr",
        first: "Byron",
        last: "Shaw",
      },
      location: {
        street: {
          number: 2162,
          name: "Alexander Road",
        },
        city: "Cambridge",
        state: "Surrey",
        country: "United Kingdom",
        postcode: "AC10 0WX",
        coordinates: {
          latitude: "66.3392",
          longitude: "-13.8090",
        },
        timezone: {
          offset: "+9:00",
          description: "Tokyo, Seoul, Osaka, Sapporo, Yakutsk",
        },
      },
      email: "byron.shaw@example.com",
      login: {
        uuid: "8d9a5258-821e-4895-ab7a-f7211c190129",
        username: "orangeladybug456",
        password: "kuai",
        salt: "1axu3EPn",
        md5: "1075c25f27f0c843accb9e1578618583",
        sha1: "6e9eaacc0b52a2d58284f0d9e5a794484cd9b50d",
        sha256:
          "4d4e38f17906ce7ef0186d0a3ee0c75639dfbfe506007a0b0b373fa189818966",
      },
      dob: {
        date: "1959-11-03T10:21:29.419Z",
        age: 63,
      },
      registered: {
        date: "2019-06-04T16:20:30.450Z",
        age: 3,
      },
      phone: "017687 18329",
      cell: "0778-100-470",
      id: {
        name: "NINO",
        value: "SE 41 80 14 E",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/48.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/48.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/48.jpg",
      },
      nat: "GB",
    },
    {
      gender: "female",
      name: {
        title: "Miss",
        first: "Katherine",
        last: "Gilbert",
      },
      location: {
        street: {
          number: 1640,
          name: "York Road",
        },
        city: "Peterborough",
        state: "Merseyside",
        country: "United Kingdom",
        postcode: "VK16 5DR",
        coordinates: {
          latitude: "-59.2363",
          longitude: "67.6247",
        },
        timezone: {
          offset: "-1:00",
          description: "Azores, Cape Verde Islands",
        },
      },
      email: "katherine.gilbert@example.com",
      login: {
        uuid: "ae40dd12-1a56-4a11-a2b4-5f9d06d93b92",
        username: "angryswan296",
        password: "nuggets",
        salt: "SZrzw5CW",
        md5: "c0f03568525a41a30b41afa48cbee3fa",
        sha1: "c6947659bde1702b517d6194988fbb9fab504d38",
        sha256:
          "7d8fbd63d53601e25e60a5dc80b0f8a5c0b0f79c8495d36a940c7975e6e52389",
      },
      dob: {
        date: "1957-06-29T16:01:32.102Z",
        age: 65,
      },
      registered: {
        date: "2012-02-12T10:04:26.329Z",
        age: 10,
      },
      phone: "019467 87558",
      cell: "0792-353-585",
      id: {
        name: "NINO",
        value: "JR 08 55 02 D",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/women/6.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/6.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/6.jpg",
      },
      nat: "GB",
    },
    {
      gender: "male",
      name: {
        title: "Mr",
        first: "Gavin",
        last: "Neal",
      },
      location: {
        street: {
          number: 807,
          name: "Queen Street",
        },
        city: "Canterbury",
        state: "Fife",
        country: "United Kingdom",
        postcode: "N9 6DL",
        coordinates: {
          latitude: "-31.3629",
          longitude: "22.0360",
        },
        timezone: {
          offset: "-2:00",
          description: "Mid-Atlantic",
        },
      },
      email: "gavin.neal@example.com",
      login: {
        uuid: "da6d7c03-8a96-408f-8563-53ffae9222c2",
        username: "purpletiger985",
        password: "gandalf",
        salt: "ppr4sZNA",
        md5: "9c21b856b84a76b27e2ba2a9ae6c5189",
        sha1: "12e7327c28ad6310a4ecb8d8a8a40f37faf84c07",
        sha256:
          "b259aea85907b0d98f55b8ae33114c7e0d320133ca63901a03e7e53e5fdc8546",
      },
      dob: {
        date: "1984-01-28T14:51:12.435Z",
        age: 38,
      },
      registered: {
        date: "2004-06-24T01:15:59.294Z",
        age: 18,
      },
      phone: "015242 74903",
      cell: "0733-245-082",
      id: {
        name: "NINO",
        value: "CM 07 99 98 S",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/52.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/52.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/52.jpg",
      },
      nat: "GB",
    },
    {
      gender: "male",
      name: {
        title: "Mr",
        first: "Dale",
        last: "Hudson",
      },
      location: {
        street: {
          number: 4845,
          name: "Chester Road",
        },
        city: "Belfast",
        state: "Cumbria",
        country: "United Kingdom",
        postcode: "M54 2AD",
        coordinates: {
          latitude: "13.8111",
          longitude: "103.6566",
        },
        timezone: {
          offset: "-3:00",
          description: "Brazil, Buenos Aires, Georgetown",
        },
      },
      email: "dale.hudson@example.com",
      login: {
        uuid: "7a193297-fba8-4bfa-b698-f270d04336ec",
        username: "angryrabbit215",
        password: "disco",
        salt: "tUEvqlK1",
        md5: "39f43b4b206e718109d80c216c2f8c0b",
        sha1: "f919cae1b8ae655cec45a015ef94eac9338a3be2",
        sha256:
          "4631582923b356cf5e831e396d725c63ff99e256b2a120ebdd36648ced9e3525",
      },
      dob: {
        date: "1960-03-17T13:50:34.655Z",
        age: 62,
      },
      registered: {
        date: "2012-06-21T04:22:56.586Z",
        age: 10,
      },
      phone: "016977 45965",
      cell: "0757-179-539",
      id: {
        name: "NINO",
        value: "PM 96 19 23 R",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/men/38.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/38.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/38.jpg",
      },
      nat: "GB",
    },
    {
      gender: "female",
      name: {
        title: "Mrs",
        first: "Amanda",
        last: "Horton",
      },
      location: {
        street: {
          number: 926,
          name: "Grange Road",
        },
        city: "Plymouth",
        state: "Avon",
        country: "United Kingdom",
        postcode: "QC19 8YF",
        coordinates: {
          latitude: "-77.9489",
          longitude: "-156.9746",
        },
        timezone: {
          offset: "+3:30",
          description: "Tehran",
        },
      },
      email: "amanda.horton@example.com",
      login: {
        uuid: "6a0314ec-4c70-4cbe-9d8c-288efd916dd2",
        username: "redlion591",
        password: "davies",
        salt: "70jc1G0C",
        md5: "eb557273cbe77cc9c777f7315d37b15a",
        sha1: "ac43dd0137d1669e078c65b010894595946f4cb3",
        sha256:
          "f82fbf2501ca26fc7d690a50e585e721c5be5825c0fafa8556b3e9703ec5c29d",
      },
      dob: {
        date: "1948-01-09T11:30:03.562Z",
        age: 74,
      },
      registered: {
        date: "2007-12-16T18:58:26.595Z",
        age: 15,
      },
      phone: "013873 58767",
      cell: "0732-392-189",
      id: {
        name: "NINO",
        value: "OR 36 04 04 O",
      },
      picture: {
        large: "https://randomuser.me/api/portraits/women/37.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/37.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/37.jpg",
      },
      nat: "GB",
    },
  ],
  info: {
    seed: "13a4871447ca7f39",
    results: 50,
    page: 1,
    version: "1.3",
  },
};

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sort, setSort] = useState("");
  const [curentContact, setCurentContact] = useState(undefined);
  const [searchContact, setSearchContact] = useState([]);
  const [contactList, setContactList] = useState([]);
  const [contactDetails, setContactDetails] = useState([]);
  console.log(searchTerm);
  return (
    <Fragment>
      <ContactListNavbar
        setCurentContact={setCurentContact}
        curentContact={curentContact}
      />

      {!curentContact ? (
        <>
          <ContactListSearch
            setSearchTerm={setSearchTerm}
            searchTerm={searchTerm}
            setSort={setSort}
            sort={sort}
          />
          <ContactList
            setCurentContact={setCurentContact}
            contacts={Api.results
              .filter((r) =>
                `${r.name.first} ${r.name.last} ${r.location.state} ${r.location.city}`
                  .toLowerCase()
                  .includes(searchTerm)
              )
              .sort((a, b) => {
                if (sort === "first name") {
                  if (a.name.first < b.name.first) {
                    return -1;
                  }
                  if (a.name.first > b.name.first) {
                    return 1;
                  }
                  return 0;
                }
                if (sort === "last name") {
                  if (a.name.last < b.name.last) {
                    return -1;
                  }
                  if (a.name.last > b.name.last) {
                    return 1;
                  }
                  return 0;
                }
                return 0;
              })}
          />
        </>
      ) : (
        <ContactDetails contactDetails={curentContact} />
      )}
    </Fragment>
  );
};

export default App;
