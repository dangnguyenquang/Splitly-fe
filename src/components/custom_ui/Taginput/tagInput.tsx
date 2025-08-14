"use client"
import { X } from "lucide-react"
import { useState } from "react"

type TagInputProps = {
  label?: string
  id?: string
  name: string
  placeholder?: string
  error?: string
  defaultTags?: string[]
  onChange: (name: string, tags: string[]) => void
}

export const TagInput: React.FC<TagInputProps> = ({
  label,
  id,
  name,
  placeholder = "",
  defaultTags = [],
  onChange,
}) => {
  const [value, setValue] = useState<string>("")
  const [tags, setTags] = useState<string[]>(defaultTags)
  const [isActive, setIsActive] = useState<boolean>(false)
  const [error, setError] = useState(false)

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
    onChange(name, tags)
  }

  const removeTag = (tag: string) => {
    const arr = tags.filter((t) => t !== tag)
    setTags(arr)
    onChange(name, arr)
  }

  const emailValidation = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
  }

  const updateTagHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    e.preventDefault()
    const newTag = value.trim().split(",")[0]
    const shouldAdd = !tags.includes(newTag) && newTag !== "" && emailValidation(newTag)
    if ((e.key === "," || e.key === "Enter") && shouldAdd) {
      const arr = [...tags, newTag]
      setTags(arr)
      onChange(name, arr)
      setValue("")
    } else {
    }

    if (e.key === "Backspace" && tags.length > 0 && value === "") {
      const copyOfTags = [...tags]
      copyOfTags.pop()
      setTags(copyOfTags)
      onChange(name, copyOfTags)
    }
  }

  const focusHandler = () => setIsActive(true)
  const blurHandler = () => setIsActive(false)

  return (
    <div className={`mb-4 h-auto font-sans`}>
      {label && (
        <label
          htmlFor={id ?? name}
          className='block text-sm font-medium text-gray-700 mb-1'
        >
          {label}
        </label>
      )}
      <div className='file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex w-full min-w-0 rounded-md border bg-transparent p-2 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive'>
        <div className='flex flex-1 flex-wrap gap-2 items-center max-h-32 overflow-y-scroll no-scrollbar'>
          {tags.map((tag, index) => (
            <div
              key={index}
              className='flex items-center text-sm px-2 py-1 rounded-sm bg-gray-200'
            >
              <span>{tag}</span>
              <button
                type='button'
                onClick={() => removeTag(tag)}
                className='ml-1 text-gray-400 hover:text-black'
              >
                <X className='w-4 h-4 cursor-pointer' />
              </button>
            </div>
          ))}
          <input
            type='text'
            placeholder={placeholder}
            name={name}
            id={id ?? name}
            value={value}
            onChange={changeHandler}
            autoComplete='off'
            onKeyUp={updateTagHandler}
            onKeyDown={(e) => e.key === "Enter" && e.preventDefault()}
            onFocus={focusHandler}
            onBlur={blurHandler}
            className='flex-1  outline-0 border-none'
          />
        </div>
        {error && <div className='text-sm text-red-500 mt-1'>Email không hợp lệ</div>}
      </div>
    </div>
  )
}
