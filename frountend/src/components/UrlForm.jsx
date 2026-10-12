 import React from 'react'
 
 const UrlForm = () => {
   return (
        <form >
          <label
            htmlFor="url"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            Enter your URL
          </label>

          <input
            id="url"
            type="url"
            placeholder="https://example.com"
            required
            className="mb-4 w-full rounded-lg border-2 border-gray-300 px-4 py-3 text-gray-800 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />

          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 px-4 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-blue-300"
          >Shorten URL
          </button>

          {/* Error */}
        {/* {error && (
          <p className="mt-4 text-sm text-red-600">
            {error}
          </p>
        )} */}

        {/* Short URL Result */}
        {/* {shortUrl && (
          <div className="mt-6">
            <p className="mb-2 text-sm font-medium text-gray-700">
              Your shortened URL
            </p>

            <div className="flex items-center gap-3 rounded-lg border border-blue-200 bg-blue-50 p-3">
              <a
                href={shortUrl}
                target="_blank"
                rel="noreferrer"
                className="min-w-0 flex-1 break-all text-sm text-blue-600 hover:underline"
              >
                {shortUrl}
              </a>

              <button
                type="button"
                onClick={handleCopy}
                className="shrink-0 rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
              >
                Copy
              </button>
            </div>
          </div>
        )} */}
        </form>
     
   )
 }

 export default UrlForm;

  