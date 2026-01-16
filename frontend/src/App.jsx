import React, { useState, useEffect } from 'react';
import { Menu, X, Heart, User, Calendar, Phone, Mail, MessageCircle, Search, Home, Info } from 'lucide-react';

export default function ShelterWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [animals, setAnimals] = useState([]);
  const [selectedAnimal, setSelectedAnimal] = useState(null);

  // Загружаем животных с API
  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/animals/')
      .then(res => res.json())
      .then(data => setAnimals(data))
      .catch(err => console.error(err));
  }, []);

  // Функция бронирования
  function bookAnimal(animalId) {
    fetch('http://127.0.0.1:8000/api/adoptions/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        animal: animalId,
        user: 1, // временно захардкожено
        message: 'Хочу встретиться'
      })
    })
      .then(res => {
        if (!res.ok) throw new Error('Ошибка бронирования');
        return res.json();
      })
      .then(data => {
        setAnimals(prev => prev.map(a => a.id === animalId ? { ...a, status: 'Забронирован' } : a));
        alert('Встреча успешно забронирована!');
        setShowBookingModal(false);
      })
      .catch(err => alert(err.message));
  }

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
                <Home className="w-4 h-4" /> <span>Главная</span>
              </button>
              <button onClick={() => setActiveSection('animals')} className="flex items-center space-x-1 text-gray-700 hover:text-purple-600 transition">
                <Heart className="w-4 h-4" /> <span>Питомцы</span>
              </button>
              <button onClick={() => setActiveSection('about')} className="flex items-center space-x-1 text-gray-700 hover:text-purple-600 transition">
                <Info className="w-4 h-4" /> <span>О нас</span>
              </button>
              <button onClick={() => setActiveSection('contact')} className="flex items-center space-x-1 text-gray-700 hover:text-purple-600 transition">
                <Phone className="w-4 h-4" /> <span>Контакты</span>
              </button>
              <button onClick={() => setShowLoginModal(true)} className="flex items-center space-x-1 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition">
                <User className="w-4 h-4" /> <span>Войти</span>
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
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Heart className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Онлайн бронирование</h3>
              <p className="text-gray-600">Забронируйте встречу с питомцем через наш удобный интерфейс</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <User className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Личный кабинет</h3>
              <p className="text-gray-600">Управляйте своими бронированиями и следите за питомцами</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <MessageCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Поддержка 24/7</h3>
              <p className="text-gray-600">Наша команда всегда готова помочь вам с любыми вопросами</p>
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

          {/* Animals Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {animals.map(animal => (
              <div key={animal.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-2">
                <div className="h-48 bg-gradient-to-br from-purple-200 to-blue-200 flex items-center justify-center text-8xl">
                  {animal.image || '🐾'}
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
                    onClick={() => { setSelectedAnimal(animal); setShowBookingModal(true); }}
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

      {/* Booking Modal */}
      {showBookingModal && selectedAnimal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold">Бронирование встречи с {selectedAnimal.name}</h3>
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
              <button
                onClick={() => bookAnimal(selectedAnimal.id)}
                className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition"
              >
                Забронировать
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
