import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-primary-900 text-cream border-t border-black/10">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">

          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <Link href="/" className="font-black uppercase tracking-widest text-3xl mb-4 block text-white hover:text-primary-600 transition-colors duration-500">
                GLOBAL PEACE MINISTRY
              </Link>
              <p className="text-gray-400 text-sm leading-relaxed max-w-sm font-medium">
                &quot;Global Peace Is Possible&quot; <br />
                Advancing harmony, inclusion, and spirituality across borders.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col sm:flex-row gap-12 lg:gap-8">
            <div className="flex-1">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 mb-6">
                Quick Links
              </h3>
              <ul className="space-y-3 text-sm font-bold uppercase tracking-widest">
                <li><Link href="/" className="hover:text-primary-600 transition-colors block">Home</Link></li>
                <li><Link href="/about" className="hover:text-primary-600 transition-colors block">About Us</Link></li>
                <li><Link href="/ministries" className="hover:text-primary-600 transition-colors block">Our Ministry</Link></li>
                <li><Link href="/book" className="hover:text-primary-600 transition-colors block">Book</Link></li>
                <li><Link href="/prayer" className="hover:text-primary-600 transition-colors block">Prayer &amp; Counselling</Link></li>
              </ul>
            </div>
            <div className="flex-1">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-transparent mb-6">
                More
              </h3>
              <ul className="space-y-3 text-sm font-bold uppercase tracking-widest mt-0 sm:mt-12">
                <li><Link href="/blog" className="hover:text-primary-600 transition-colors block">Blog</Link></li>
                <li><Link href="/gallery" className="hover:text-primary-600 transition-colors block">Gallery</Link></li>
                <li><Link href="/donate" className="hover:text-primary-600 transition-colors block">Donate</Link></li>
                <li><Link href="/contact" className="hover:text-primary-600 transition-colors block">Contact Us</Link></li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 mb-6">
              Contact HQ
            </h3>
            <ul className="space-y-4 text-sm text-gray-300 font-medium">
              <li>
                <div className="text-cream font-bold uppercase tracking-widest mb-1 text-xs">Address</div>
                17 Mildmay Road, Romford, Essex, RM7 7DA
              </li>
              <li>
                <div className="text-cream font-bold uppercase tracking-widest mb-1 text-xs">Phone</div>
                +44-7453387868
              </li>
              <li>
                <div className="text-cream font-bold uppercase tracking-widest mb-1 text-xs">Email</div>
                <a href="mailto:info@globalpeaceministry.org" className="hover:text-primary-600 transition-colors block">info@globalpeaceministry.org</a>
                <a href="mailto:pastor@globalpeaceministry.org" className="hover:text-primary-600 transition-colors block">pastor@globalpeaceministry.org</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-cream/10 flex flex-col justify-center items-center gap-6">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-cream/70 text-center">
            Copyright &copy; {new Date().getFullYear()} Global Peace Ministry. All Rights Reserved. | globalpeaceministry.org
          </p>
          <div className="flex space-x-8 text-[11px] font-bold uppercase tracking-[0.2em] text-cream/70">
            <Link href="#" className="hover:text-primary-600 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary-600 transition-colors">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
