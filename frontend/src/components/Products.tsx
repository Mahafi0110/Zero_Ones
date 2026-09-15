import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { ChevronLeft, ChevronRight, MessageCircle, X } from 'lucide-react';
import type { ProductItem } from '../services/api';

interface ProductsProps {
  products: ProductItem[];
  whatsappNumber?: string;
}

export const Products: React.FC<ProductsProps> = ({ products, whatsappNumber }) => {
  const productsTrackRef = useRef<HTMLDivElement>(null);
  const productDialogRef = useRef<HTMLDivElement>(null);
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const fallbackImages = [
    'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80',
  ];

  const scrollProducts = (direction: 'left' | 'right') => {
    productsTrackRef.current?.scrollBy({
      left: direction === 'right' ? productsTrackRef.current.clientWidth : -productsTrackRef.current.clientWidth,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    if (!selectedProduct) return;

    productDialogRef.current?.scrollTo({ top: 0, behavior: 'auto' });

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelectedProduct(null);
    };

    document.addEventListener('keydown', closeOnEscape);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', closeOnEscape);
      document.body.style.overflow = '';
    };
  }, [selectedProduct]);

  const openWhatsApp = () => {
    if (!selectedProduct) return;
    const phone = (whatsappNumber || '9360484136').replace(/\D/g, '');
    const message = encodeURIComponent(`Hello Zero Ones, I would like to know more about ${selectedProduct.title}.`);
    window.open(`https://wa.me/${phone.startsWith('91') ? phone : `91${phone}`}?text=${message}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="products" className="py-20 bg-gray-50 border-t border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-1">Products &amp; Solutions</div>
          <h2 className="text-3xl font-extrabold">Security &amp; Technology Products for Different Requirements</h2>
          <p className="mt-4 text-sm leading-relaxed text-gray-600">Zero Ones provides technology products for property security, attendance management, vehicle monitoring and cash handling. The right product depends on the application, environment, required features and installation requirements.</p>
        </div>
        <div className="relative px-1 sm:px-10">
          {products.length === 0 ? (
            <p className="text-center text-gray-500">No products added yet. Use the Django Admin panel to add some!</p>
          ) : (
            <>
              <button
                type="button"
                aria-label="Previous products"
                onClick={() => scrollProducts('left')}
                className="absolute left-0 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-blue-600 shadow-lg transition hover:bg-blue-600 hover:text-white"
              >
                <ChevronLeft size={22} />
              </button>

              <div ref={productsTrackRef} className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-4 text-left [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {products.map((product) => (
                  <article key={product.id} className="flex min-w-full snap-start flex-col justify-between rounded-2xl border border-[var(--border)] bg-[var(--bg)] p-6 transition hover:shadow-xl group sm:min-w-[calc(50%-12px)] md:min-w-[calc(33.333%-16px)]">
                    <div>
                      <div className="mx-auto mb-6 h-40 w-full overflow-hidden rounded-xl bg-blue-50 transition group-hover:scale-[1.02]">
                        <img
                          src={product.image || fallbackImages[product.id % fallbackImages.length]}
                          alt={product.title}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <h3 className="mb-2 text-center text-lg font-bold">{product.title}</h3>
                      <p className="mb-6 text-center text-xs text-gray-500 line-clamp-3">{product.desc}</p>
                    </div>
                    <button type="button" onClick={event => { event.stopPropagation(); setSelectedProduct(product); }} className="block w-full rounded-xl border border-blue-600 py-2 text-center text-xs font-semibold text-blue-600 transition hover:bg-blue-600 hover:text-white">
                      {product.button_label || 'Explore Solutions'} &rarr;
                    </button>
                  </article>
                ))}
              </div>

              <button
                type="button"
                aria-label="Next products"
                onClick={() => scrollProducts('right')}
                className="absolute right-0 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-blue-600 shadow-lg transition hover:bg-blue-600 hover:text-white"
              >
                <ChevronRight size={22} />
              </button>
            </>
          )}
        </div>
      </div>

      {selectedProduct && createPortal(
        <div 
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-gray-950/70 p-4 backdrop-blur-sm overflow-y-auto" 
          onClick={() => setSelectedProduct(null)}
        >
          <div 
            ref={productDialogRef} 
            role="dialog" 
            aria-modal="true" 
            aria-labelledby="product-dialog-title" 
            onClick={event => event.stopPropagation()} 
            className="relative max-h-[90vh] w-full max-w-md overflow-y-auto rounded-xl bg-white p-4 text-left shadow-2xl my-auto"
          >
            <div className="sticky top-0 z-10 -mx-1 mb-1 flex justify-end bg-white pb-1">
              <button 
                type="button" 
                aria-label="Close product details" 
                onClick={() => setSelectedProduct(null)} 
                className="flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition hover:bg-blue-600 hover:text-white"
              >
                <X size={16} />
              </button>
            </div>
            <h3 id="product-dialog-title" className="pr-8 text-lg font-extrabold leading-tight text-gray-900">{selectedProduct.title}</h3>
            <p className="mt-2 text-[11px] leading-snug text-gray-600">{selectedProduct.desc}</p>
            {selectedProduct.details && <div className="mt-2 whitespace-pre-line text-[11px] leading-snug text-gray-600">{selectedProduct.details}</div>}
            {selectedProduct.considerations && (
              <div className="mt-3 rounded-lg bg-blue-50 p-2.5">
                <h4 className="mb-1.5 text-[11px] font-bold text-blue-900">What to Consider</h4>
                <ul className="space-y-0.5 text-[11px] leading-snug text-gray-700">
                  {selectedProduct.considerations.split('\n').filter(Boolean).map(item => <li key={item}>✓ {item}</li>)}
                </ul>
              </div>
            )}
            <div className="sticky bottom-0 mt-3 bg-white pt-2">
              <button type="button" onClick={openWhatsApp} className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-600 px-4 py-2 text-xs font-bold text-white shadow-lg transition hover:bg-emerald-700 hover:shadow-xl">
                <MessageCircle size={16} /> Chat on WhatsApp
              </button>
            </div>
          </div>
        </div>,
        document.body
      )}
    </section>
  );
};