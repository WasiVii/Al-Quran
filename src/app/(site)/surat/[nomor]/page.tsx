import SuratDetail from '@/app/_components/surat/surat-detail'

export default function Page({ params: { nomor } }: { params: { nomor: number } }) {
  return (
    <>
      <SuratDetail params={{ nomor }} />
    </>
  )
}
