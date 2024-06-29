'use client'

import React, { useState, ChangeEvent } from 'react'

interface ImageFieldProps {
  value: string | null
  onChange: (url: string | null) => void
}

export const ImageField: React.FC<ImageFieldProps> = ({ value, onChange }) => {
  const [preview, setPreview] = useState<string | null>(value)

  const handleImageChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const formData = new FormData()
      formData.append('image', file)

      try {
        const response = await fetch('/api/uploads', {
          method: 'POST',
          body: formData,
        })

        if (response.ok) {
          const data = await response.json()
          const imageUrl = data.url
          setPreview(imageUrl)
          onChange(imageUrl)
        } else {
          console.error('Upload failed')
          onChange(null)
        }
      } catch (error) {
        console.error('Error uploading the image:', error)
        onChange(null)
      }
    }
  }

  return (
    <div className="max-w-[100%] overflow-hidden">
      {preview && (
        <img src={preview} alt="Image preview" style={{ maxWidth: '100%', height: 'auto' }} />
      )}
      <input
        className="max-w-[150px] overflow-hidden mt-4"
        type="file"
        accept="image/*"
        onChange={handleImageChange}
      />
    </div>
  )
}
