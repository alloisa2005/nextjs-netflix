import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"

const PlayVideoModal = ({id, title, overview, youtubeString, releaseDate, age, duration, state, changeState}) => {
  return (
    <Dialog open={state} onOpenChange={ () => changeState(!state) }>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle className='mt-1 mb-2'>{title}</DialogTitle>
          <DialogDescription className='line-clamp-3'>{overview}</DialogDescription>
          <div className="flex items-center gap-x-2">
            <p>{releaseDate}</p>
            <p className="border py-0.5 px-1 border-gray-200 rounded">{age}+</p>
            <p>{duration}h</p>
          </div>
        </DialogHeader>  
        <iframe src={youtubeString} height={250} className='w-full'>
        </iframe>      
      </DialogContent>
    </Dialog>
  )
}

export default PlayVideoModal