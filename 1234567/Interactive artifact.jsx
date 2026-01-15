import React, { useState } from 'react';
import { Menu, X, Heart, User, Calendar, Phone, Mail, MessageCircle, Search, Home, Info, LogIn } from 'lucide-react';

export default function ShelterWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showBookingModal, setShowBookingModal] = useState(false);

  const animals = [
    { id: 1, name: 'Барсик', type: 'Кот', age: '2 года', image: '🐱', status: 'Доступен' },
    { id: 2, name: 'Рекс', type: 'Собака', age: '3 года', image: '🐕', status: 'Доступен' },
    { id: 3, name: 'Мурка', type: 'Кошка', age: '1 год', image: '🐈', status: 'Забронирован' },
    { id: 4, name: 'Бобик', type: 'Собака', age: '4 года', image: '🐕‍🦺', status: 'Доступен' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Heart className="w-8 h-8 text-purple-600" />
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Приют "Добрые Лапы"
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-6">
              <button onClick={() => setActiveSection('home')} className="flex items-center space-x-1 text-gray-700 hover:text-purple-600 transition">
                <Home className="w-4 h-4" />
                <span>Главная</span>
              </button>
              <button onClick={() => setActiveSection('animals')} className="flex items-center space-x-1 text-gray-700 hover:text-purple-600 transition">
                <Heart className="w-4 h-4" />
                <span>Питомцы</span>
              </button>
              <button onClick={() => setActiveSection('about')} className="flex items-center space-x-1 text-gray-700 hover:text-purple-600 transition">
                <Info className="w-4 h-4" />
                <span>О нас</span>
              </button>
              <button onClick={() => setActiveSection('contact')} className="flex items-center space-x-1 text-gray-700 hover:text-purple-600 transition">
                <Phone className="w-4 h-4" />
                <span>Контакты</span>
              </button>
              <button onClick={() => setShowLoginModal(true)} className="flex items-center space-x-1 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition">
                <User className="w-4 h-4" />
                <span>Войти</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 space-y-2 pb-4">
              <button onClick={() => { setActiveSection('home'); setIsMenuOpen(false); }} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-purple-50 rounded">Главная</button>
              <button onClick={() => { setActiveSection('animals'); setIsMenuOpen(false); }} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-purple-50 rounded">Питомцы</button>
              <button onClick={() => { setActiveSection('about'); setIsMenuOpen(false); }} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-purple-50 rounded">О нас</button>
              <button onClick={() => { setActiveSection('contact'); setIsMenuOpen(false); }} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-purple-50 rounded">Контакты</button>
              <button onClick={() => { setShowLoginModal(true); setIsMenuOpen(false); }} className="block w-full text-left px-4 py-2 bg-purple-600 text-white rounded">Войти</button>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      {activeSection === 'home' && (
        <section className="container mx-auto px-4 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Подарите Любовь Питомцу
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Найдите своего верного друга в нашем приюте. Более 100 животных ждут свой дом и заботливых хозяев.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={() => setActiveSection('animals')} className="bg-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-700 transition transform hover:scale-105">
                Посмотреть питомцев
              </button>
              <button onClick={() => setActiveSection('contact')} className="bg-white border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-50 transition">
                Связаться с нами
              </button>
            </div>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-8 mt-20">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Heart className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-center mb-3">Онлайн бронирование</h3>
              <p className="text-gray-600 text-center">Забронируйте встречу с питомцем через наш удобный интерфейс</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <User className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-center mb-3">Личный кабинет</h3>
              <p className="text-gray-600 text-center">Управляйте своими бронированиями и следите за питомцами</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <MessageCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-center mb-3">Поддержка 24/7</h3>
              <p className="text-gray-600 text-center">Наша команда всегда готова помочь вам с любыми вопросами</p>
            </div>
          </div>
        </section>
      )}

      {/* Animals Section */}
      {activeSection === 'animals' && (
        <section className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Наши Питомцы</h2>
            <p className="text-gray-600 text-lg">Познакомьтесь с животными, которые ждут своего дома</p>
          </div>

          {/* Search */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Поиск по имени или типу животного..." 
                className="w-full px-6 py-4 rounded-full border-2 border-gray-200 focus:border-purple-600 focus:outline-none pl-14"
              />
              <Search className="w-6 h-6 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2" />
            </div>
          </div>

          {/* Animals Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {animals.map(animal => (
              <div key={animal.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-2">
                <div className="h-48 bg-gradient-to-br from-purple-200 to-blue-200 flex items-center justify-center text-8xl">
                  {animal.image}
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold">{animal.name}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${animal.status === 'Доступен' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'}`}>
                      {animal.status}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-1">{animal.type}</p>
                  <p className="text-gray-500 text-sm mb-4">{animal.age}</p>
                  <button 
                    onClick={() => setShowBookingModal(true)}
                    disabled={animal.status !== 'Доступен'}
                    className={`w-full py-3 rounded-lg font-semibold transition ${animal.status === 'Доступен' ? 'bg-purple-600 text-white hover:bg-purple-700' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}
                  >
                    {animal.status === 'Доступен' ? 'Забронировать встречу' : 'Недоступен'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* About Section */}
      {activeSection === 'about' && (
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">О нашем приюте</h2>
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <p className="text-lg text-gray-700 mb-6">
                Приют "Добрые Лапы" работает с 2015 года и за это время помог найти дом более чем 2000 животным. Мы верим, что каждый питомец заслуживает любви и заботы.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Наша миссия - спасать бездомных животных, обеспечивать им медицинскую помощь, кров и питание, а также находить для них любящие семьи.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-12">
                <div className="text-center p-6 bg-purple-50 rounded-xl">
                  <div className="text-4xl font-bold text-purple-600 mb-2">2000+</div>
                  <div className="text-gray-700">Питомцев нашли дом</div>
                </div>
                <div className="text-center p-6 bg-blue-50 rounded-xl">
                  <div className="text-4xl font-bold text-blue-600 mb-2">150+</div>
                  <div className="text-gray-700">Животных в приюте</div>
                </div>
                <div className="text-center p-6 bg-green-50 rounded-xl">
                  <div className="text-4xl font-bold text-green-600 mb-2">24/7</div>
                  <div className="text-gray-700">Работаем для вас</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Contact Section */}
      {activeSection === 'contact' && (
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Свяжитесь с нами</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold mb-6">Контактная информация</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 text-purple-600 mt-1" />
                    <div>
                      <div className="font-semibold">Телефон</div>
                      <div className="text-gray-600">+996 555 123 456</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 text-purple-600 mt-1" />
                    <div>
                      <div className="font-semibold">Email</div>
                      <div className="text-gray-600">info@shelter.kg</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Home className="w-6 h-6 text-purple-600 mt-1" />
                    <div>
                      <div className="font-semibold">Адрес</div>
                      <div className="text-gray-600">г. Бишкек, ул. Примерная 123</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold mb-6">Напишите нам</h3>
                <div className="space-y-4">
                  <input type="text" placeholder="Ваше имя" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-purple-600 focus:outline-none" />
                  <input type="email" placeholder="Email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-purple-600 focus:outline-none" />
                  <textarea placeholder="Сообщение" rows="4" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-purple-600 focus:outline-none"></textarea>
                  <button onClick={(e) => e.preventDefault()} className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition">
                    Отправить сообщение
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Login Modal */}
      {showLoginModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold">Вход в аккаунт</h3>
              <button onClick={() => setShowLoginModal(false)} className="text-gray-400 hover:text-gray-600">
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="space-y-4">
              <input type="email" placeholder="Email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-purple-600 focus:outline-none" />
              <input type="password" placeholder="Пароль" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-purple-600 focus:outline-none" />
              <button onClick={(e) => e.preventDefault()} className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition">
                Войти
              </button>
              <div className="text-center text-gray-600">
                Нет аккаунта? <button className="text-purple-600 font-semibold hover:underline">Зарегистрироваться</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Booking Modal */}
      {showBookingModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold">Бронирование встречи</h3>
              <button onClick={() => setShowBookingModal(false)} className="text-gray-400 hover:text-gray-600">
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="space-y-4">
              <input type="text" placeholder="Ваше имя" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-purple-600 focus:outline-none" />
              <input type="tel" placeholder="Телефон" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-purple-600 focus:outline-none" />
              <input type="date" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-purple-600 focus:outline-none" />
              <input type="time" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-purple-600 focus:outline-none" />
              <textarea placeholder="Комментарий" rows="3" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-purple-600 focus:outline-none"></textarea>
              <button onClick={(e) => e.preventDefault()} className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition">
                Забронировать
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Heart className="w-6 h-6 text-purple-400" />
                <span className="text-xl font-bold">Добрые Лапы</span>
              </div>
              <p className="text-gray-400">Помогаем животным найти любящий дом с 2015 года</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Быстрые ссылки</h4>
              <div className="space-y-2 text-gray-400">
                <div className="hover:text-white cursor-pointer">О нас</div>
                <div className="hover:text-white cursor-pointer">Питомцы</div>
                <div className="hover:text-white cursor-pointer">Контакты</div>
                <div className="hover:text-white cursor-pointer">Помощь приюту</div>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Социальные сети</h4>
              <div className="space-y-2 text-gray-400">
                <div className="hover:text-white cursor-pointer">Instagram</div>
                <div className="hover:text-white cursor-pointer">Facebook</div>
                <div className="hover:text-white cursor-pointer">WhatsApp</div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            © 2026 Приют "Добрые Лапы". Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
}