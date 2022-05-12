<?php

namespace App\Form;

use App\Entity\Categories;
use App\Entity\Filters;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ButtonType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class FilterType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('min_likes', NumberType::class, [
                'label' => 'Minimum likes',
                'attr'=>[
                    'class'=>'form-control',
                    'id'=>'likes_min',
                    'placeholder' => 'Min'
                ],
                'required' => false,
            ])
            ->add('max_likes', NumberType::class, [
                'label' => 'Maximum likes',
                'attr'=>[
                    'class'=>'form-control',
                    'id'=>'likes_max',
                    'placeholder' => 'Max'
                ],
                'required' => false,
            ])
            ->add('min_views', NumberType::class, [
                'label' => 'Minimum views',
                'attr'=>[
                    'class'=>'form-control',
                    'id'=>'views',
                    'placeholder' => 'Min'
                ],
                'required' => false
            ])
            ->add('max_views', NumberType::class, [
                'label' => 'Maximum views',
                'attr'=>[
                    'class'=>'form-control',
                    'placeholder' => 'Max'
                ],
                'required' => false,
            ])
            ->add('min_duration', NumberType::class, [
                'label' => 'Minimum duration',
                'attr'=>[
                    'class'=>'form-control',
                    'id'=>'time',
                    'placeholder' => 'Min'
                ],
                'required' => false,
            ])
            ->add('max_duration', NumberType::class, [
                'label' => 'Maximum duration',
                'attr'=>[
                    'class'=>'form-control',
                    'placeholder' => 'Max'
                ],
                'required' => false,
            ])
            ->add('min_uploadDate', DateType::class, [
                'required' => false,
                'widget' => 'single_text',
                'html5' => false,
                'attr' => [
                    'class' => ' js-datepicker form-control',
                    'placeholder' => 'aaaa-mm-jj'
                ],
            ])
            ->add('max_uploadDate', DateType::class, [
                'required' => false,
                'widget' => 'single_text',
                'html5' => false,
                'attr' => ['class' => ' js-datepicker form-control',
                'placeholder' => 'aaaa-mm-jj'
                ],
            ])
            ->add('has_subtitles', CheckboxType::class, [
                'label' => 'Has subtitles',
                'attr'=>[
                    'class'=>'form-check-input',
                    'id'=>'flexSwitchCheckDefault'
                ],
                'required' => false,
            ])
            ->add('keywords', TextType::class, [
                'required' => false,
                'label' => 'Keywords',
                'attr'=>[
                    'class'=>'form-control',
                    'id'=>'keywords',
                    'placeholder' => 'Add keywords'
                ],
                'required' => false,
            ])
            ->add('category', EntityType::class, [
                'required' => false,
                'class' => Categories::class,
                'attr'=>[
                    'class'=>'form-select',
                    'id'=>'category',
                    'placeholder' => 'Choose a category'
                ],
                'choice_label' => 'name',
            ])
            //toDo 
            ->add('wantSave', CheckboxType::class, [
                'required' => false,
                'label' => 'Save filters',
                'attr' => [
                    'class' => 'btn btn-danger button²',
                    'id'=>'flexCheckDefault'
                ],
            ])
            ->add('button', SubmitType::class, [
                'label' => 'Search',
                'attr' => [
                    'class' => 'btn btn-danger button²',
                    'id'=> 'search-btn'
                ],
            ])

        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
        ]);
    }
}
