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
                'required' => false,
            ])
            ->add('max_likes', NumberType::class, [
                'label' => 'Maximum likes',
                'required' => false,
            ])
            ->add('min_views', NumberType::class, [
                'label' => 'Minimum views',
                'required' => false,
            ])
            ->add('max_views', NumberType::class, [
                'label' => 'Maximum views',
                'required' => false,
            ])
            ->add('min_duration', NumberType::class, [
                'label' => 'Minimum duration',
                'required' => false,
            ])
            ->add('max_duration', NumberType::class, [
                'label' => 'Maximum duration',
                'required' => false,
            ])
            ->add('min_uploadDate', DateType::class, [
                'required' => false,
                'widget' => 'single_text',
                'html5' => false,
                'attr' => ['class' => 'js-datepicker'],
            ])
            ->add('max_uploadDate', DateType::class, [
                'required' => false,
                'widget' => 'single_text',
                'html5' => false,
                'attr' => ['class' => 'js-datepicker'],
            ])
            ->add('has_subtitles', CheckboxType::class, [
                'label' => 'Has subtitles',
                'required' => false,
            ])
            ->add('keywords', TextType::class, [
                'required' => false,
                'label' => 'Keywords',
                'required' => false,
            ])
            ->add('category', EntityType::class, [
                'required' => false,
                'class' => Categories::class,
                'choice_label' => 'name',
            ])
            //toDo 
            ->add('name', TextType::class, [
                'required' => false,
                'label' => 'Save filters',
            ])
            ->add('button', SubmitType::class, [
                'label' => 'Search',
                'attr' => ['class' => 'btn btn-primary'],
            ])

        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
        ]);
    }
}
