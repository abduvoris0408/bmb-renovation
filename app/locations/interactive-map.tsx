"use client"

import { useState } from "react"
import WorldMap from "@/components/world-map"
import { MapPin } from "lucide-react"

interface Location {
  id: string
  name: string
  lat: number
  lng: number
  address: string
  phone: string
  email: string
}

const locations: Location[] = [
  {
    id: "london",
    name: "London",
    lat: 51.5074,
    lng: -0.1278,
    address: "123 Renovation Street, London, SW1A 1AA",
    phone: "+44 (0)20 1234 5678",
    email: "london@bmbrenovation.co.uk",
  },
  {
    id: "manchester",
    name: "Manchester",
    lat: 53.4808,
    lng: -2.2426,
    address: "456 Design Avenue, Manchester, M1 1AA",
    phone: "+44 (0)161 1234 5678",
    email: "manchester@bmbrenovation.co.uk",
  },
  {
    id: "birmingham",
    name: "Birmingham",
    lat: 52.4862,
    lng: -1.8904,
    address: "789 Remodel Road, Birmingham, B1 1AA",
    phone: "+44 (0)121 1234 5678",
    email: "birmingham@bmbrenovation.co.uk",
  },
  {
    id: "edinburgh",
    name: "Edinburgh",
    lat: 55.9533,
    lng: -3.1883,
    address: "101 Renovation Lane, Edinburgh, EH1 1AA",
    phone: "+44 (0)131 1234 5678",
    email: "edinburgh@bmbrenovation.co.uk",
  },
  {
    id: "cardiff",
    name: "Cardiff",
    lat: 51.4816,
    lng: -3.1791,
    address: "202 Design Street, Cardiff, CF10 1AA",
    phone: "+44 (0)29 1234 5678",
    email: "cardiff@bmbrenovation.co.uk",
  },
  {
    id: "belfast",
    name: "Belfast",
    lat: 54.5973,
    lng: -5.9301,
    address: "303 Remodel Avenue, Belfast, BT1 1AA",
    phone: "+44 (0)28 1234 5678",
    email: "belfast@bmbrenovation.co.uk",
  },
]

export default function InteractiveMap() {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null)

  return (
    <div className="relative">
      <WorldMap
        locations={locations.map((loc) => ({ name: loc.name, lat: loc.lat, lng: loc.lng }))}
        className="w-full h-[400px] md:h-[500px] rounded-lg border border-gray-200"
      />

      <div className="absolute top-4 right-4 bg-white p-4 rounded-lg shadow-md max-w-xs w-full">
        {selectedLocation ? (
          <div>
            <h3 className="text-lg font-semibold text-[#1d1f1c] mb-2">{selectedLocation.name}</h3>
            <address className="not-italic text-[#758195] text-sm mb-2">{selectedLocation.address}</address>
            <p className="text-[#758195] text-sm">{selectedLocation.phone}</p>
            <p className="text-[#758195] text-sm mb-3">{selectedLocation.email}</p>
            <button
              onClick={() => setSelectedLocation(null)}
              className="text-sm text-[#1d1f1c] hover:text-[#e1c789] transition-colors"
            >
              Back to all locations
            </button>
          </div>
        ) : (
          <div>
            <h3 className="text-lg font-semibold text-[#1d1f1c] mb-2">Our Locations</h3>
            <p className="text-[#758195] text-sm mb-3">Click on a location to view details</p>
            <ul className="space-y-2">
              {locations.map((location) => (
                <li key={location.id}>
                  <button
                    onClick={() => setSelectedLocation(location)}
                    className="flex items-center text-[#1d1f1c] hover:text-[#e1c789] transition-colors text-sm"
                  >
                    <MapPin size={14} className="mr-1" />
                    {location.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

