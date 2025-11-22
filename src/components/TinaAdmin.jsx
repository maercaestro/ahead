import { useEffect } from 'react'

const TinaAdmin = () => {
  useEffect(() => {
    // Redirect to Tina's admin interface
    window.location.href = '/admin/index.html'
  }, [])

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
        <p>Redirecting to Tina CMS Admin...</p>
      </div>
    </div>
  )
}

export default TinaAdmin
